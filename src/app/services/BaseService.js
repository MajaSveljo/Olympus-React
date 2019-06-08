import httpService from './../services/HttpService';

export default class BaseService {
  constructor() {
    this.api = httpService.client;
  }
}
