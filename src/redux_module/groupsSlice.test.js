import reducer, {
  setCategories,
  setRegions,
} from './groupsSlice';

describe('groupsSlice', () => {
  describe('reducer', () => {
    it('set categories', () => {
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

    it('set regions', () => {
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
  });
});
