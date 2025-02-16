import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) 
        return res.send("Access Denied !!, Please try to  <a href='/fashionHunter/User/login' > login again </a> ");

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) 
        {
            console.log(err);
            return res.redirect('/fashionHunter/User/login');
        }
        req.user = decoded;
        next();
    }); 
}
