import jwt, { decode } from "jsonwebtoken";


export const authMiddleware = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token)
        return res.redirect('/fashionHunter/admin/login');

    jwt.verify(token, process.env.JWT_SECRET, (err,decode)=>{
        if(err)
            return res.redirect('/fashionHunter/admin/login');
        req.user = decode;
        next();
    })
}