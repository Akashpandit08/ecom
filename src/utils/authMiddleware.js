import jwt from 'jsonwebtoken';

const extractUserId = (req, res, next) => {
    // Get the authorization header
    const authHeader = req.headers.authorization;
    
    // Extract the token from the authorization header
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    // Log the token for debugging
    console.log('Token:', token);

    if (!token) {
        return res.status(401).json({ message: 'No refresh token provided' });
    }

    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const userId = decoded?._id; // Ensure you access the user ID properly

        // If the userId is not found in the token, return a 401 Unauthorized response
        if (!userId) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }

        // Attach the userId to the request object
        req.userId = userId;
        next(); // Call the next middleware or route handler
    } catch (error) {
        console.error('JWT Error:', error); // Log the error for debugging
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        return res.status(500).json({ message: 'Failed to decode token' });
    }
};

export default extractUserId;
