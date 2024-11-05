import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
//import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';

@Injectable()
export class BootcampsService {

  constructor (@InjectRepository(Bootcamp) private bootcampRepository: Repository<Bootcamp>) { }

  create(createBootcampDto: CreateBootcampDto) {
    //crear la instancia del objeto a guardar
    const nuevoBootcamp =
    this.bootcampRepository.create(createBootcampDto);
    return this.bootcampRepository.save(nuevoBootcamp)
  }

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy ({ id : id });
  }

  async update(id: number, updateBootcampDto: any) {

   //verificar o seleccionar el bootcamp cuyo id sea el del parametro
   const updBootcamp = await this.bootcampRepository.findOneBy({id: id});

   //fusionar los cambios con el bootcamp hallado
   await this.bootcampRepository.merge(updBootcamp, updateBootcampDto)

   //grabar cambios en base de datos
   await this.bootcampRepository.save(updBootcamp)
   return updBootcamp
  }

  async remove(id: number) {
    const delBootcamp = await this.bootcampRepository.findOneBy({id});
    await this.bootcampRepository.delete(delBootcamp);
    return delBootcamp
  }
}
