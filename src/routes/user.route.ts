import express, {Router, Request, Response, NextFunction } from 'express';
import { CreateUser } from '../dtos/user.dto';
import validates from '../middlewares/validation.middle';


const router: Router = express.Router();

router.post('/',[validates(CreateUser)], async (req: Request, res: Response, next: NextFunction) => {
    // next(new Error("Some Error"))
    return res.status(201).json({
        message: "Success"
    })
})

export default router;