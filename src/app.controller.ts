import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entidades/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Endpoint: es un metodo que se ejecuta cuando se invoca una determinada URL desde el cliente http( bruno)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Endpoint:
  // 1. Metodo (verbo) HTTP  a utilizar (junto con la ruta)
  // 2. Firma del metodo a invocar 
  // 3. Instrucciones a ejecutar 
  @Get("/prueba1")
  mensaje():string{
    return "Mensaje de prueba 1"
  }

  // Endpoint
  @Get("/bootcamps/:id/curso/:cursoId")
  mensajeBootcampPorId(@Param("id")id:string, @Param("cursoId") cursoId:string) :string{
    return `mostrando bootcamp con id: ${id} y su cursoId es ${cursoId}`
  }

  // Endpoint
  @Get("Identificacion/:id")
  getIdentificacion(@Query("nombre") nombre:string, @Query("edad") edad:number, @Param("id") id:number , @Query("ciudad") ciudad:string) : Student{
    return new Student(id, nombre, edad, ciudad)
  }

}
