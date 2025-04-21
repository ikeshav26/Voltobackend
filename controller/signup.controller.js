import User from "../model/model.js";
import bcrypt from "bcrypt";




export const signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword=await bcrypt.hash(password,10);
        const newuser = new User({
            username: username,
            password: hashPassword
        });
        await newuser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};