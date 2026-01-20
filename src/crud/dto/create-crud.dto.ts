<<<<<<< HEAD
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
=======
export class CreateCrudDto {}
>>>>>>> 9a79e73871fb93909f3fc9996de3e876d53a4acf
