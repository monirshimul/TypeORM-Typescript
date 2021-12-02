import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';


export async function auth(req: Request, res: Response, next: NextFunction) {
    const token: any = req.headers["x-auth-token"];
    if (!token) return res.status(401).json({
        statusCode: 401,
        message: "No Token Found"
    });
    else {
        try {
            const tokenData: any = jwt.verify(token, "secret");
            req.user = tokenData;
            next();
        }
        catch(ex) {
            return res.status(401).json({
                statusCode: 401,
                message: "Invalid Credentials"
            });
        }
    }
}