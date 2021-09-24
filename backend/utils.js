import jwt from "jsonwebtoken";

export const generateToken = (user)=>{
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.name,
        isAdmin: user.isAdmin,
    }, 
    process.env.JWT_SECRET, // || secret -> to share project and will still work
    {
        expiresIn: '30d',
    });
}