import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CrudService {
  constructor(private readonly prisma :PrismaService){}
 async create(createCrudDto: CreateCrudDto) {
    const create = await this.prisma.products.create({
      data :{
        ...createCrudDto
      }
      
    })
    return create;
  }

  async findAll() {
    const findall = await this.prisma.products.findMany()
    return findall;
  }

  async findOne(id: number) {
    const findOne = await this.prisma.products.findUnique({where:{id}})
    return findOne;
  }

  async update(id: number, updateCrudDto: UpdateCrudDto) {
    const update = await this.prisma.products.update({where:{id},data:{...updateCrudDto}})
    return update;
  }

  async remove(id: number) {
    const remove = await this.prisma.products.delete({where:{id}})
    return remove;
  }
}
