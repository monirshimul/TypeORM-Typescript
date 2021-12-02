import { User } from "../entity/user.entity";
import { CreateUser } from "../dtos/user.dto";
import { getManager } from "typeorm";
import { classToPlain } from "class-transformer";



export async function createUser(data: CreateUser, createdBy: string): Promise<User>{

    return await getManager().getRepository(User).save({
       ...classToPlain(data),
       createdBy: createdBy
    })
    
}


export async function getUser(): Promise<User[]> {
    return getManager().getRepository(User).find();
}

export async function getUserByUsername(username: string): Promise<User | undefined> {
    return await getManager().getRepository(User).findOne({username: username});
}