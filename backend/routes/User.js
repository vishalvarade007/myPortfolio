import express from "express";
import { addProjects, addTimeline, contact, deleteProjects, deleteTimeline, getUser, login, logout, updateUser } from "../controllers/User.js";
import {isAuthenticated} from "../middlewares/auth.js";
import {myProfile} from "../controllers/User.js";

export const userRouter = express.Router();

userRouter.post("/login",login);

userRouter.get("/logout",logout);

userRouter.get("/user",getUser);

userRouter.get("/me",isAuthenticated,myProfile);

userRouter.put("/admin/update",isAuthenticated,updateUser);

userRouter.post("/admin/timeline/add",isAuthenticated,addTimeline);

userRouter.post("/admin/project/add",isAuthenticated,addProjects);

userRouter.delete("/admin/timeline/:id",isAuthenticated,deleteTimeline);

userRouter.delete("/admin/project/:id",isAuthenticated,deleteProjects);

userRouter.post("/contact",contact);
