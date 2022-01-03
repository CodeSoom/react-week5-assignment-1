export default class ApiService {
  constructor(host, logger) {
    this.host = host;
    this.logger = logger;
  }

  async fetchRegions() {
    try {
      const response = await fetch(`${this.host}/regions`);
      const regions = await response.json();
      return regions;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async fetchCategories() {
    try {
      const response = await fetch(`${this.host}/categories`);
      const categories = await response.json();
      return categories;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async fetchRestaurants(region, category) {
    try {
      const response = await fetch(`${this.host}/restaurants?region=${region}&category=${category}`);
      const categories = await response.json();
      return categories;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
