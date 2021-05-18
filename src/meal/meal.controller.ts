import { Res } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MealService } from './meal.service';

@Controller('meal')
export class MealController {
  constructor(private mealService: MealService) { }

  @Get('/search/:text')
  async setCaptcha(@Res() res, @Param() params): Promise<any> {
    const { text } = params;
    const result = await this.mealService.search(text);
    res.send(result);
  }

}
