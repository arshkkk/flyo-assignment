import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { API_BASE_URL } from '../config.json';

class RequestService {
  private axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: API_BASE_URL,
      responseType: 'json',
      headers: {
        Authorization: 'Bearer Wookie2019',
      },
    });
  }

  get = (path: string, params: Object = {}): AxiosPromise =>
    this.axios
      .get(path, {
        params,
      })
      .then((res: AxiosResponse) => res.data);
}

const RequestServiceInstance = new RequestService();

export { RequestServiceInstance as RequestService };
