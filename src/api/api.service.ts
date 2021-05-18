import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

@Injectable()
export class ApiService {
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
}
