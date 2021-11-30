import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application, Request, Response, NextFunction } from 'express';
import userRouter from './routes/user.route';



createConnection()
    .then((conn) => {
        const app: Application = express();
        app.use(express.json());

        app.use('/user', userRouter);

        app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            return res.status(500).json({
                message: "Internal Server Error",
                error: err.toString()
            })
        })

        app.listen(3001, () => {
            console.log(`Server is running at port 3001`);
        })
    })
    .catch((err) => {
        console.error("Database Connection Error: ", err);
        process.exit(1);
    })