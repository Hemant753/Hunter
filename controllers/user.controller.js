import userModel from "../models/user.model.js";
import * as userService from "../services/User.service.js";
import {validationResult} from "express-validator";

export const createUserCtrl = async (req,res)=> {
    const error = validationResult(req);
    
    if(!error.isEmpty())
    {   res.redirect("/login");
        // return res.status(400).json({error: error.array() });
    }
  
    try{
        const user = await userService.createUser(req.body);   
         
        const token = await user.generateJWT();        
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 60000),
            httpOnly: true
        }); 
        res.redirect("/fashionHunter/User/home");
    }catch(err)
    { 
           res.redirect("/fashionHunter/User/login");
    }
} 

export const loginUserCtrl = async (req,res)=> {
    const error = validationResult(req);
    
    if(!error.isEmpty())
    {   res.redirect("/fashionHunter/User/login");
        // return res.status(400).json({error: error.array() });
    }
  
    try{
        const user = await userService.loginUser(req.body);   
        const token = await user.generateJWT();        
        res.cookie("token", token, {
            httpOnly: true
        }); 

        
        res.redirect("/fashionHunter/User/home");
    }catch(err)
    { 
           console.log(err);
           res.redirect("/fashionHunter/User/login")
    }
}

export const getUserCtrl = async (req,res)=> {
    const error = validationResult(req);
    if(!error.isEmpty())
    {  
        res.send('something went wrong');
    }
    try{
        const user = await userService.getUser(req.user.email);   
        res.render("profile.ejs", {user});
    }catch(err)
    {      
           res.send('something went wrong');
    }
}

export const editUserCtrl = async (req,res)=> {
    const error = validationResult(req);
    if(!error.isEmpty())
    {  
        res.send('something went wrong');
    }
    try{
        const user = req.body;
        await userService.editUser(req.user.email, user);  
        res.redirect("/fashionHunter/User/home");      
    }catch(err)
    {      console.log(err);
    
           res.send('something went wrong');
    }
}

export const getProductCtrl = async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty())
    {  
        res.send('something went wrong');
    }

    try{
        const data = await userService.getProduct(req.params.category);
        return data;
    }catch(err){
        console.log(err);
        res.send('something went');
    }
};

export const getProductByIdCtrl = async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty())
    {  
        res.send('something went wrong');
    }
    try{
        const data = await userService.getProductById(req.params.id);
        return data;
    }catch(err){
        console.log(err);
        res.send('something went');
    }
}