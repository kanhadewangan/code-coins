import { PrismaClient } from "@prisma/client";
import express from "express";
import dotenv from "dotenv";
import jwt, { type JwtPayload } from "jsonwebtoken"; 
import authenticateJWT from "./middle";
dotenv.config(); 

const prisma = new PrismaClient();


const app = express.Router();
app.use(express.json());



app.get("/", async(req, res) => {
    try{
        const data = await prisma.question.findMany({});
        res.json(data);
    } catch (error) {
        console.error("Error fetching questions:", error);
        res.status(500).send("Failed to fetch questions.");
    }
})


app.post("/add-question", authenticateJWT, async (req, res) => {
  try {
    const { code, title, description, language, difficulty } = req.body;
    if (!code || !title || !description) {
        res.status(400).send("Missing required fields: problemId, code, title, or description.");
        return;
    }
  
       

        await prisma.question.create({
            data: {
                title,
                description,
                language,
                difficulty,
                code,
                userId: (req as any).userId, // Assuming a user ID of 1 for simplicity
                adminId: "wrwrsfw14124" // Add a valid adminId value as required by your schema
            }
        });
        res.status(200).send("Submission received and stored.");
    } catch (error) {
        res.status(500).send("Failed to store submission.");
    }
});







app.post("/submission", async (req, res) => {
    try {
        const { problemId, code } = req.body;
        const data = await prisma.submission.create({
            data: {
                problemId,
                code,
                language: "TYPESCRIPT",
                userId: (req as any).userId 
            }
        })
        console.log("Submission created:", data);
        res.status(201).send("Submission created successfully.");
    }
    catch (error) {
        console.error("Error creating submission:", error);
        res.status(500).send("Failed to create submission.");
    }


})

const apps = app;
export default apps;