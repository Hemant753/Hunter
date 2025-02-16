import { Router } from "express";
import * as adminCtrl from '../controllers/admin.controller.js';
import upload from "../config/multer.config.js";
import * as auth from "../middlewares/a_auth.middleware.js"
const router = Router();


router.get('/login', (req,res)=>{
    res.render("a_login.ejs");
});
router.post('/login', adminCtrl.loginAdminCtrl);


router.get('/newproduct', auth.authMiddleware , (req,res)=>{; 
    res.render('a_newProduct.ejs');
});
router.post('/create', upload.fields([{ name: "img1" }, { name: "img2" }]) ,  adminCtrl.createProdCtrl); 


router.get('/allproduct', auth.authMiddleware , async (req,res)=>{
    const products = await adminCtrl.getAllProductsCtrl()
    res.render('a_allproduct.ejs', {products: products});
});
router.get('/delete/Product/:id', auth.authMiddleware , adminCtrl.deleteProductCtrl);



export default router;