import reducer, {
  setCategories,
  setRegions,
  setRestaurants,

  selectCategory,
  selectRegion,
} from './RestaurantSlice';

describe('RestaurantSlice', () => {
  describe('reducer', () => {
    it('sets categories', () => {
      const oldState = {
        categories: [],
        regions: [],
      };

      const newState = {
        categories: [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
        ],
        regions: [],
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
        categories: [],
        regions: [],
      };

      const newState = {
        categories: [],
        regions: ['서울', '부산'],
      };

      expect(reducer(
        oldState,
        setRegions(['서울', '부산']),
      )).toEqual(newState);
    });

    it('sets restaurants', () => {
      const restaurants = ['원초밥'];

      const oldState = { restaurants: [] };
      const newState = { restaurants };

      expect(reducer(
        oldState,
        setRestaurants(restaurants),
      )).toEqual(newState);
    });

    it('changes selected category', () => {
      const oldState = {
        selected: {
          category: { id: null, name: '' },
          region: '',
        },
      };

      const newState = {
        selected: {
          category: { id: 1, name: '한식' },
          region: '',
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
          category: '',
          region: '',
        },
      };
      const newState = {
        selected:
        {
          category: '',
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
