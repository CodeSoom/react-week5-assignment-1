import reducer, {
  selectCategory,
  selectRegion,
  updateRestaurants,
} from './selectedSlice';

describe('selectSlice', () => {
  describe('reducer', () => {
    it('updates selected category', () => {
      const oldState = { category: '', region: '' };
      const newState = { category: '한식', region: '' };

      expect(reducer(
        oldState,
        selectCategory('한식'),
      )).toEqual(newState);
    });

    it('updates selected region', () => {
      const oldState = { category: '', region: '' };
      const newState = { category: '', region: '서울' };

      expect(reducer(
        oldState,
        selectRegion('서울'),
      )).toEqual(newState);
    });

    it('updates matched restaurant', () => {
      const restaurantInfos = [{
        id: 5,
        categoryId: 3,
        name: '원초밥',
        address: '서울 강남구',
        information: '원초밥 in 서울 강남구',
      }];

      const oldState = { restaurants: [] };
      const newState = {
        restaurants: restaurantInfos,
      };

      expect(reducer(
        oldState,
        updateRestaurants(restaurantInfos),
      )).toEqual(newState);
    });
  });
});
