import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

    // Endpoints de get 
    @Get()
    getAllBootcamps() :string{
        return "aqui se van a mostrar todos los bootcamps"
    }

    @Get("/:id")
    getBootcampId( @Param("id") id:number) :string{
        return `aqui se va a mostrar el bootcamp cuyo id es: ${id}`
    }

    @Post()
    creatBootcamp():string{
        return "aqui se va a guardar un nuevo bootcamp"
    }
}
