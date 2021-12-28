class SearchService {
  getRestaurant() {
    return [];
  }

  getRegions() {
    return [];
  }

  getCategories() {
    return [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
    ];
  }
}

export default new SearchService();
