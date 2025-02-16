import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";
import * as auth from "../middlewares/auth.middleware.js"
import userModel from "../models/user.model.js";
// import * as UserService from "../services/user.service.js";0

const router = Router();

router.get('/login', (req,res)=>{
	res.render("c_login.ejs");
});

router.post('/signUp', UserController.createUserCtrl);
router.post('/login', UserController.loginUserCtrl);

router.get('/home', auth.authMiddleware , (req,res)=>{
	res.render("c_home.ejs");
});

router.get('/profile', auth.authMiddleware , UserController.getUserCtrl);
router.post('/profile/Edit', auth.authMiddleware , UserController.editUserCtrl);


router.get('/collection', auth.authMiddleware , (req,res)=>{
	res.render("c_collection.ejs");
});

router.get('/about', auth.authMiddleware , (req,res)=>{
	res.render("aboutUs.ejs");
});

router.get('/wishlist', auth.authMiddleware , (req,res)=>{
	res.render('c_wishlist.ejs');
});

router.get('/policy', auth.authMiddleware , (req,res)=>{
	res.render('policy.ejs');
});

router.get('/shop', auth.authMiddleware , (req,res)=>{
	res.render('c_shop.ejs');
});									//pending

router.get('/order', auth.authMiddleware , (req,res)=>{
	res.render('c_orders.ejs');
});	

router.get('/orderDetail', auth.authMiddleware , (req,res)=>{	
	res.render('c_orderDetail.ejs');
});

router.get('/product/:id', auth.authMiddleware , async (req,res)=>{ 
    
    const data = await UserController.getProductByIdCtrl(req,res);
	res.render('c_product.ejs', {data});
});

router.get('/shop/:category', async (req,res)=>{
    const product = await UserController.getProductCtrl(req,res);
    // console.log(data);
    
    res.render('products.ejs', {product});
});


router.get('/cart', (req, res) => {
    let items = [
        {
            id: 3,
            name: 'Black Tshirt',
            quantity: 1,
            price: 20,
            img: 'https://via.placeholder.com/100',
        },
		{
            id: 3,
            name: 'Black Tshirt',
            quantity: 1,
            price: 20,
            img: 'https://via.placeholder.com/100',
        },
		{
            id: 3,
            name: 'Black Tshirt',
            quantity: 1,
            price: 20,
            img: 'https://via.placeholder.com/100',
        }
    ];
    
    res.render('cart.ejs', { items }); // Pass items to the EJS template
});

router.post("/update-cart", (req, res) => {
    const updatedCart = req.body.cart;
    console.log("Updated Cart:", updatedCart);
    res.json({ message: "Cart updated successfully!" });
	
});



export default router;