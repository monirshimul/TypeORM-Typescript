
import { Request, Response, NextFunction } from "express";
import { validateOrReject } from "class-validator";

export default function validates(DtoClass: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        let instance: any = new DtoClass(req.body);
        try {
            await validateOrReject(instance, {
                whitelist: true,
                forbidNonWhitelisted: true,
                validationError: {
                    target: false,
                    value: false
                }
            });
            next()
        }
        catch (errors) {
            return res.status(400).json({
                statusCode: 400,
                message: "Validation Error",
                reason: errors
            });
        }
    }
}