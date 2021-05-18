import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { IMeal } from './meal.interface';

@Injectable()
export class MealService {
  constructor(private readonly apiService: ApiService) {

  }

  async search(searchParam: string) {
    try {

      return await this.apiService.get<IMeal[]>(`/search.php?s=${searchParam}`);

    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn("MealService -> search -> error", error);
      return new Promise((_, rej) => rej(error));
    }
  }
}
