class SearchService {
  constructor() {
    this.base = 'https://eatgo-customer-api.ahastudio.com';
  }

  async getRestaurant({ region, category }) {
    const url = `${this.base}/restaurants?region=${region}&category=${category}`;
    const response = await fetch(url);
    return response.json();
  }

  async getRegions() {
    const url = `${this.base}/regions`;
    const response = await fetch(url);
    return response.json();
  }

  async getCategories() {
    const url = `${this.base}/categories`;
    const response = await fetch(url);
    return response.json();
  }
}

export default new SearchService();
