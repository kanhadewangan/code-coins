import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { createClient } from "redis";
import z, { minLength } from "zod";
import users from "./users";
import apps from "./question";


const app = express();
app.use(express.json());
console.log(process.env.DATABASE_URL); // Log the database URL for debugging
console.log("JWT Secret:", process.env.JWT_SECRET); // Log the JWT secret for debugging

app.use("/api/users",users);
app.use("/api/question",apps);










app.listen(3000, async () => {
    console.log("Server is running on port 3000");
});


