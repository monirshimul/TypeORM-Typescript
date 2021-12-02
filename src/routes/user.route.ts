import express, { Router, Request, Response, NextFunction } from 'express';
import { createUser, getUser, getUserByUsername } from '../services/user.service';
import { CreateUser, UserLogin } from '../dtos/user.dto';
import validates from '../middlewares/validation.middle';
import { wrap } from '../middlewares/wrap.middle';
import { auth } from '../middlewares/auth.middle';
import jwt from 'jsonwebtoken';


const router: Router = express.Router();

router.post('/',
    [auth, validates(CreateUser)],
    wrap(async (req: Request, res: Response, next: NextFunction) => {
        const newUser = await createUser(new CreateUser(req.body), req.user.username)
        return res.status(201).json({
            data: newUser
        })
    })

)


router.get('/',
    [auth],
    wrap(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.user.username);
        const users = await getUser();
        return res.status(201).json({
            data: users
        })
    })

)


router.post('/login',
    [validates(UserLogin)],
    wrap(async (req: Request, res: Response, next: NextFunction) => {
        const user = await getUserByUsername(req.body.username);
        if(user) {
            if(user.username === req.body.username && user.password === req.body.password) {
                const token = jwt.sign({
                    username: user.username
                }, "secret", { expiresIn: '10h' });

                return res.status(400).json({
                    message: "login success",
                    accessToken: token
                })

            }
            else {
                return res.status(400).json({
                    message: "Invlid Creds"
                })
            }
        }
        else {
            return res.status(400).json({
                message: "No user found"
            })
        }
    })

)



export default router;