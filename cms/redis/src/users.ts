import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { createClient } from "redis";
import z, { minLength } from "zod";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const route = express.Router();
route.use(express.json());
const schema = z.object({
    email: z.string().email(),
    name: z.string().min(1).max(100),
    password: z.string().min(8).max(100)
});


route.post("/signup", async (req, res) => {
    const {  email, password, name } = schema.parse(req.body);
    const prisma = new PrismaClient();

    try {
        const user = await prisma.users.create({
            data: {
                email,
                name,
                password: await bcrypt.hash(req.body.password, 10)
            }
        });
        const jwtSecret = process.env.JWT_SECRET || "@@##!!@@$@";
        console.log("Using JWT secret for signing:", jwtSecret);
        const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: "1h" });
        
      

        console.log("User created:", token);
        res.send({ token, user: { id: user.id, email: user.email, name: user.name } });
        console.log("User created:", user);


    } catch (error) {
        console.error("Database error:", error);
        res.status(500).send("Failed to create user.");
    } finally {
        await prisma.$disconnect();
    }
});



const users = route;
export default users;