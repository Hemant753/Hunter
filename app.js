import express from 'express';
import connect from './db/db.js';
import user from './models/user.model.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.routes.js';
import adminRoute from './routes/admin.routes.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
connect();

app.use( express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());




app.use("/fashionHunter/User", userRoute);
app.use("/fashionHunter/Admin", adminRoute);



export default app;