import {app} from "./app.js";
import dotenv from "dotenv";
import {connectDatabase} from "./config/db.js";
import cloudinary from "cloudinary";

dotenv.config({path:"./config/config.env"});
connectDatabase();

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port  ${process.env.PORT} `);
})