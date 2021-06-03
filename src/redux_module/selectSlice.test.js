import reducer, {
  selectCategory,
  selectRegion,
  updateRestaurants,
} from './selectedSlice';

describe('selectSlice', () => {
  describe('reducer', () => {
    it('updates selected category', () => {
      const oldState = { category: { id: null, name: '' }, region: '' };
      const newState = { category: { id: 1, name: '한식' }, region: '' };

      expect(reducer(
        oldState,
        selectCategory({ id: 1, name: '한식' }),
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
      const restaurants = ['원초밥'];

      const oldState = { restaurants: [] };
      const newState = { restaurants };

      expect(reducer(
        oldState,
        updateRestaurants(restaurants),
      )).toEqual(newState);
    });
  });
});
