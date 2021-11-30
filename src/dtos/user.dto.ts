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
}