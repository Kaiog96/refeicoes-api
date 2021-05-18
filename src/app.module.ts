import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiService } from './api/api.service';
import { MealController } from './meal/meal.controller';
import { MealService } from './meal/meal.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, MealController],
  providers: [ApiService, AppService, MealService],
})
export class AppModule { }
