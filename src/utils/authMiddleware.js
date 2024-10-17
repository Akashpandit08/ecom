import jwt from 'jsonwebtoken';

const extractUserId = (req, res ,next)=>{
    const refreshToken =req.cookies?.refreshToken;

    if (!refreshToken){
        return res.status(401).json({ message: 'No refresh token provided' });

    }
    try{
        const decode =jwt.decode(refreshToken);
        const userId = decode?._id;

        if(!userId){
            return res.status(401).json({message: 'Invalid refresh token'})
        }
         req.userId = userId;
         next();
    } catch (error) {
        return res.status(500).json({ message: 'Failed to decode token' });
    }
}


export default extractUserId;

