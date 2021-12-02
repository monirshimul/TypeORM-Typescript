import { IsBoolean, IsOptional, IsString, MinLength } from "class-validator";


export class CreateUser {

    public constructor(init?:Partial<CreateUser>) {
        Object.assign(this, init);
    }

    @IsString() @MinLength(5)
    firstName: string;

    @IsOptional() @IsString() @MinLength(5)
    lastName: string;

    @IsBoolean()
    isActive: boolean

    @IsString() @MinLength(3)
    username: string;

    @IsString() @MinLength(6)
    password: string;

}

export class UserLogin {
    public constructor(init?:Partial<UserLogin>) {
        Object.assign(this, init);
    }

    @IsString() @MinLength(3)
    username: string;

    @IsString() @MinLength(6)
    password: string;
}