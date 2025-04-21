import express from 'express';
import User from '../model/model.js';
import bcrypt from 'bcrypt';




export const login=async(req,res)=>{
    try{
        const {username,password}=req.body;

   const user=await User.findOne({
    username:username
   });

   if(!user){
    return res.status(400).json({message:"Invalid credentials"})
   }
   
   const isMatch=await bcrypt.compare(password,user.password);
   if(!isMatch){
    return res.status(400).json({message:"Invalid credentials"})
   }

   res.status(200).json({message:"Login successfully",user:{
    id:user._id,
    username:user.username
   }})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}