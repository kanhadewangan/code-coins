import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
dotenv.config();



function authenticateJWT(req: express.Request, res: express.Response, next: express.NextFunction) {
    const tokenHeader = req.headers["auth"];

    if (!token) {
        res.status(401).send("Unauthorized");
        return;
    }
    
    try {
        console.log("Token received:", token);
        console.log("JWT_SECRET from env:", process.env.JWT_SECRET);
        const jwtSecret = process.env.JWT_SECRET || "@@##!!@@$@";
        console.log("Using JWT secret:", jwtSecret);
        
        const decoded = jwt.verify(token, jwtSecret) as jwt.JwtPayload;
        console.log("Decoded token:", decoded);
        (req as any).userId = decoded.id;
        next();
    } catch (error) {
        console.error("JWT verification error:", error);
        if (error instanceof jwt.JsonWebTokenError) {
            if (error.message === "invalid signature") {
                res.status(401).json({ 
                    error: "Invalid token signature", 
                    message: "Token was signed with a different secret" 
                });
            } else if (error.message === "jwt expired") {
                res.status(401).json({ error: "Token expired" });
            } else {
                res.status(401).json({ error: "Invalid token format" });
            }
        } else {
            res.status(401).json({ error: "Token verification failed" });
        }
    }
}

export default authenticateJWT;
