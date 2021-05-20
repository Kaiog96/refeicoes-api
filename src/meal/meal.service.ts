import { Injectable } from '@nestjs/common';
import { IMeal } from './meal.interface';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

@Injectable()
export class MealService {
  api: AxiosInstance;
  baseURL: string;


  constructor(responseTypeFile = false) {
    this.baseURL = process.env.MEAL_ENDPOINT;

    this.api = axios.create({
      baseURL: this.baseURL,
      responseType: responseTypeFile ? "arraybuffer" : "json",
    });
  }


  async get<T>(url: string): Promise<T> {
    try {
      const results = await this.api.get(url);

      return this.handleResponse<T>(results);
    } catch (error) {
      this.handleRequestError(error.response);
      return new Promise((_, rej) => {
        rej(error.response);
      });
    }
  }

  private handleResponse<T>(APIResponse: AxiosResponse): T {
    return APIResponse.data;
  }
  private handleRequestError(APIResponse: any) {
    // eslint-disable-next-line no-console
    console.warn("BaseService -> handleRequestError ->", APIResponse);
  }

  async search(searchParam: string) {
    try {

      return await this.get<IMeal[]>(`/search.php?s=${searchParam}`);

    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn("MealService -> search -> error", error);
      return new Promise((_, rej) => rej(error));
    }
  }
}








