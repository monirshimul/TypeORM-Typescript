import express, {Router, Request, Response, NextFunction } from 'express';


const router: Router = express.Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    next(new Error("Some Error"))
    // return res.status(201).json({
    //     message: "Success"
    // })
})

export default router;