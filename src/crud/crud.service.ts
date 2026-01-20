import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
<<<<<<< HEAD
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
    const update = await this.prisma.products.update({where:{id},
      data:{...updateCrudDto}
    })
    return update;
  }

  async remove(id: number) {
    const remove = await this.prisma.products.delete({where:{id}})
    return remove;
=======

@Injectable()
export class CrudService {
  create(createCrudDto: CreateCrudDto) {
    return 'This action adds a new crud';
  }

  findAll() {
    return `This action returns all crud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crud`;
  }

  update(id: number, updateCrudDto: UpdateCrudDto) {
    return `This action updates a #${id} crud`;
  }

  remove(id: number) {
    return `This action removes a #${id} crud`;
>>>>>>> 9a79e73871fb93909f3fc9996de3e876d53a4acf
  }
}
