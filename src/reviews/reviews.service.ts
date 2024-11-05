import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';  // Asumiendo que tienes una entidad `Review`

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private reviewRepository: Repository<Review>) { }

  create(createReviewDto: CreateReviewDto) {
    // Crear la instancia del objeto Review a partir de los datos del DTO
    const nuevoReview = this.reviewRepository.create(createReviewDto);
    // Guardar el nuevo review en la base de datos
    return this.reviewRepository.save(nuevoReview);
  }

  findAll() {
    // Obtener todos los reviews de la base de datos
    return this.reviewRepository.find();
  }

  findOne(id: number) {
    // Buscar un review por su ID
    return this.reviewRepository.findOneBy({ id });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    // Buscar el review existente por ID
    const updReview = await this.reviewRepository.findOneBy({ id });
    
    // Si no se encuentra, puedes lanzar un error o manejarlo
    if (!updReview) {
      throw new Error('Review not found');
    }

    // Fusionar los cambios con el objeto de review existente
    this.reviewRepository.merge(updReview, updateReviewDto);

    // Guardar los cambios en la base de datos
    await this.reviewRepository.save(updReview);

    // Retornar el review actualizado
    return updReview;
  }

  async remove(id: number) {
    // Buscar el review por su ID
    const delReview = await this.reviewRepository.findOneBy({ id });
    
    // Si no se encuentra, puedes lanzar un error o manejarlo
    if (!delReview) {
      throw new Error('Review not found');
    }

    // Eliminar el review de la base de datos
    await this.reviewRepository.delete(delReview);
    
    // Retornar el review eliminado
    return delReview;
  }
}
