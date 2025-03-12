import express from "express";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { JWT_SECRET } from "../config.js";
import { auth } from "../middlewares/authMiddleware.js";


const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
    try {
        const { username , email, password, adress, city, zipCode} = req.body
        if(!username || !email || !password || !adress || !city || !zipCode){
            return res.status(422).send({
            error: "remplis tout les champs"
            })
        }
        const exists = await User.findOne({ email})
        if(exists){
            return res.status(400).send({
                error: "email exists deja"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User ({
            username,
            email,
            password: hashedPassword,
            adress,
            city,
            zipCode
        })
        const createdUser = await user.save()
        if(createdUser) {
            return res.status(200).send({
                message: "utilisateur cree"
            })
        }else{
            return res.status(200).send({
                error: "utilisateur n'est pas cree"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error : error.message
        }) 
    }
})



userRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).send({ error: "Remplis tous les champs" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(422).send({ error: "Email ou mot de passe incorrect" });
        }

        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) {
            return res.status(422).send({ error: "Email ou mot de passe incorrect" });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "10d" });

        return res.status(200).send({
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                adress: user.adress,
                city: user.city,
                zipCode: user.zipCode
            },
            token
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
});



userRouter.get('/user', auth, async (req,res) =>{
    const user = await User.findById(req.user.userId)
    return res.status(200).send({
        user
    })
})

export default userRouter