import express from "express";
import {userRouter} from "./routes/User.js";
import cookieParser from "cookie-parser";
export const app = express();
import path from "path";

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(cookieParser());

app.use("/api/v1",userRouter);

app.use(express.static(path.resolve("../client/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve("../client/build/index.html"));
})

