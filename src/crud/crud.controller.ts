<<<<<<< HEAD
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
=======
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
>>>>>>> 9a79e73871fb93909f3fc9996de3e876d53a4acf
import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Post()
<<<<<<< HEAD
  create(@Body() createCrudDto: CreateCrudDto) {  //Tenta encaixar na regra da DTO createCrudDto se conseguir ele passa a info para o service return this.crudService.create(createCrudDto)
=======
  create(@Body() createCrudDto: CreateCrudDto) {
>>>>>>> 9a79e73871fb93909f3fc9996de3e876d53a4acf
    return this.crudService.create(createCrudDto);
  }

  @Get()
  findAll() {
    return this.crudService.findAll();
  }

  @Get(':id')
<<<<<<< HEAD
  findOne(@Param('id', ParseIntPipe) id: number) {
=======
  findOne(@Param('id') id: string) {
>>>>>>> 9a79e73871fb93909f3fc9996de3e876d53a4acf
    return this.crudService.findOne(+id);
  }

  @Patch(':id')
<<<<<<< HEAD
  update(@Param('id',ParseIntPipe) id: number, @Body() updateCrudDto: UpdateCrudDto) {
=======
  update(@Param('id') id: string, @Body() updateCrudDto: UpdateCrudDto) {
>>>>>>> 9a79e73871fb93909f3fc9996de3e876d53a4acf
    return this.crudService.update(+id, updateCrudDto);
  }

  @Delete(':id')
<<<<<<< HEAD
  remove(@Param('id',ParseIntPipe) id: number) {
=======
  remove(@Param('id') id: string) {
>>>>>>> 9a79e73871fb93909f3fc9996de3e876d53a4acf
    return this.crudService.remove(+id);
  }
}
