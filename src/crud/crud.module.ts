import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
<<<<<<< HEAD
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
=======

@Module({
>>>>>>> 9a79e73871fb93909f3fc9996de3e876d53a4acf
  controllers: [CrudController],
  providers: [CrudService],
})
export class CrudModule {}
