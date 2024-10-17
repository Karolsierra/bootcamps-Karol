import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsController } from './controllers/bootcamps.controller';
import { CoursesController } from './controllers/courses.controller';
import { UsersController } from './controllers/users.controller';
import { ReviewsController } from './controllers/reviews.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampsController, CoursesController, UsersController, ReviewsController],
  providers: [AppService],
})
export class AppModule {}
