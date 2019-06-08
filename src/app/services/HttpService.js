import axios from "axios";
import config from "../../config/index";

export const BASE_API_URL = config.API_BASE_URL;

class HttpService {
  constructor(options = {}) {
    this.client = axios.create();
  //   this.client.interceptors.response.use(
  //     this.handleSuccessResponse.bind(this),
  //     this.handleErrorResponse.bind(this)
  //   );
  //   // this.unauthorizedCallback = () => {};
  // }
  //
  // // attachHeaders(headers) {
  // //
  // //   Object.assign(this.client.defaults.headers, headers);
  // // }
  // //
  // // removeHeaders(headerKeys) {
  // //   headerKeys.forEach(key => delete this.client.defaults.headers[key]);
  // // }
  //
  // handleSuccessResponse(response) {
  //   return response;
  // }
  //
  // handleErrorResponse(error) {
  //   const { status } = error.response;
  //
  //   switch (status) {
  //   case 401:
  //     this.unauthorizedCallback();
  //     break;
  //   default:
  //     break;
  //   }
  //
  //   return Promise.reject(error);
  // }
  //
  // setUnauthorizedCallback(callback) {
  //   this.unauthorizedCallback = callback;
  }
}

const options = {
  baseURL: BASE_API_URL
};
const httpService = new HttpService(options);

export default httpService;
