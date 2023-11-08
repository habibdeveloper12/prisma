import express from "express";
import app from "../../app";
import { UserController } from "./user.controller";

const router =express.Router()

router.post('/create-user',UserController.insertIntoDB)



export const UserRoutes=router