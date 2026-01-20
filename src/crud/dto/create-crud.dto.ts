import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateCrudDto {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNumber()
    price : number 

    @IsString()
  @IsOptional() 
  type?: string;
}
