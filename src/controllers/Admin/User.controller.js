
import asyncHandler from "../../utils/asyncHandler.js";

import User from "../../models/User.model.js";
import ApiError from "../../utils/ApiError.js";  
import ApiResponse from "../../utils/ApiResponse.js";

const register = asyncHandler(async (req, res) => {
    const { username, email, phone, password } = req.body;

    console.log(req.body);

   
    if (!username || !email || !phone || !password) {
        return res.status(400).json({
            code: 4001,
            message: 'All fields are required'
        });
    }

   
    const existedUser = await User.findOne({
        $or: [{ email }, { phone }]
    });

    if (existedUser) {
        throw new ApiError(409, "User with email or phone already exists");
    }

   
    const user = await User.create({
        username,
        email,
        phone,
        password,
    });

   
    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user");
    }

  
    return ApiResponse(
        res,
        200,
        "Admin created successfully",
        createdUser
    );
});

const hello = async () => {
    try {
        const hello = "My name is Akash";
        return { hello };
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token");
    }
};

const login = asyncHandler(async (req,res)=>{

    const{email,password} = req.body;

    if(!email||!password){
     throw new ApiError(409, " email or password required");

    }
     const user = User.findOne(email);
     user.isPasswordCorrect(password)

} )

export {
    hello,
    register,
};
