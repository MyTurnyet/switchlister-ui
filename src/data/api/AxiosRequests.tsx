import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://railroad-data-api-35e431c26fea.herokuapp.com/',
  timeout: 15000,
});
const responseBody = (response: AxiosResponse) => response.data;
export const axiosRequests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: unknown) => instance.post(url, body).then(responseBody),
  // put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  // delete: (url: string) => instance.delete(url).then(responseBody),
};
