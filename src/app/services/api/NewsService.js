import BaseService from "../BaseService";

const ENDPOINTS = {
  NEWS: "api/news"
};

class NewsService extends BaseService {
  getNews = async => {
    return this.api.get(ENDPOINTS.NEWS);
  };

  deleteNews = newsId => {
    return this.api.delete(ENDPOINTS.NEWS + "/" + newsId);
  };

  addNews = params => {
    return this.api.post(ENDPOINTS.NEWS, params);
  };

  editNews = news => {
    return this.api.put(ENDPOINTS.NEWS + "/" + news.id, news);
  };
}

const newsService = new NewsService();
export default newsService;
