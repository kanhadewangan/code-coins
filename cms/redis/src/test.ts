import jwt from "jsonwebtoken";
function test() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNtZTQ5cGRwZDAwMDE3azhvN2tmd3d1cmEiLCJlbWFpbCI6ImhlbGw2OEBnbWFpbC5jb20iLCJpYXQiOjE3NTQ3NDQ3MjgsImV4cCI6MTc1NDc0ODMyOH0.d_xPcByMTktsXRqBeO-eBwttF2sUwC8SQL1-HIzH_KA"
    const jwtSecret = process.env.JWT_SECRET || "";
    const verify = jwt.verify(token, jwtSecret) as jwt.JwtPayload;
    console.log("Decoded JWT:", verify.id);
}


test();