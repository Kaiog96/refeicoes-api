import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MealController } from './meal/meal.controller';
import { MealService } from './meal/meal.service';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [MealController],
  providers: [MealService],
})
export class AppModule { }
