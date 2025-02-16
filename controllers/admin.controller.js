import * as adminService from '../services/admin.service.js';
import {validationResult} from 'express-validator';

export const loginAdminCtrl = async (req,res)=> {
    const error = validationResult(req);

    if(!error.isEmpty())
    {
        console.log(error);
        res.redirect('/fashionHunter/admin/login');
    }

    try{
        const {email,password} = req.body;
        const admin = await adminService.loginAdmin({email,password});
        const token = await adminService.generateJWT(email);
        res.cookie('token',token);
        res.redirect('/fashionHunter/admin/allproduct');
    }
    catch (err) {
        console.error(err);
        res.redirect('/fashionHunter/admin/login');
    }
}

export const createProdCtrl = async (req,res)=>{
    const error = validationResult(req);

    if(!error.isEmpty())
        console.log(error);
        
    try{
        // console.log(req.body);
        
        const product = await adminService.createProduct(req.body, req.files);
        res.redirect('/fashionHunter/admin/newproduct');
    }catch(err){
        console.log(err);
        res.send("Error in creating product");
    }


}

export const getAllProductsCtrl = async (req,res)=>{
    try{
        const products = await adminService.getAllProducts();
        return products;
    }catch(err){
        console.log(err);
        res.send("Error in getting products");
    }
}

export const deleteProductCtrl = async (req,res)=>{ 
    try{
        const id = req.params.id;
        await adminService.deleteProduct(id);
        res.redirect('/fashionHunter/admin/allproduct');
    }catch(err){
        console.log(err);
        res.send("Error in deleting product");
    }
}

