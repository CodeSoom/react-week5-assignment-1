import reducer, {
  setCategories,
  setRegions,
  setSelectedRestaurants,

  selectCategory,
  selectRegion,
} from './RestaurantSlice';

describe('RestaurantSlice', () => {
  describe('reducer', () => {
    it('sets categories', () => {
      const oldState = {
        categories: [],
      };

      const newState = {
        categories: [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
        ],
      };

      expect(reducer(
        oldState,
        setCategories([
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
        ]),
      )).toEqual(newState);
    });

    it('sets regions', () => {
      const oldState = {
        regions: [],
      };

      const newState = {
        regions: ['서울', '부산'],
      };

      expect(reducer(
        oldState,
        setRegions(['서울', '부산']),
      )).toEqual(newState);
    });

    it('sets restaurants', () => {
      const restaurants = ['원초밥'];

      const oldState = { selectedRestaurants: [] };
      const newState = { selectedRestaurants: restaurants };

      expect(reducer(
        oldState,
        setSelectedRestaurants(restaurants),
      )).toEqual(newState);
    });

    it('changes selected category', () => {
      const oldState = {
        selected: {
          category: { id: null, name: '' },
        },
      };

      const newState = {
        selected: {
          category: { id: 1, name: '한식' },
        },
      };

      expect(reducer(
        oldState,
        selectCategory({ id: 1, name: '한식' }),
      )).toEqual(newState);
    });

    it('changes selected region', () => {
      const oldState = {
        selected: {
          region: '',
        },
      };
      const newState = {
        selected: {
          region: '서울',
        },
      };

      expect(reducer(
        oldState,
        selectRegion('서울'),
      )).toEqual(newState);
    });
  });
});
