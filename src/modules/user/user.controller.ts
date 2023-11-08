import { Request, Response } from "express";
import { useServices } from "./user.service"

const insertIntoDB=async(req:Request,res:Response)=>{
    try{
const result=await useServices.insertIntoDB(req.body);
res.send({
 success:true,
 message:"User Created Succesfully",
 data:result
})
    }catch(err){
res.send(err)
    }
}
export const UserController={
 insertIntoDB
}