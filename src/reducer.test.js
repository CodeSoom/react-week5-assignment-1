import reducer from './reducer';

import { changeRegion, setCategories } from './actions';

describe('reducer', () => {
  describe('changeRegion', () => {
    context('when with name', () => {
      it('returns state with selected region', () => {
        const initialState = {
          region: '',
        };

        const state = reducer(initialState, changeRegion({ name: '서울' }));

        expect(state.region).toBe('서울');
      });
    });
  });

  describe('changeCategory', () => {
    context('when with name', () => {
      it('returns state with selected category', () => {
        const initialState = {
          category: '',
        };

        const state = reducer(initialState, changeRegion({ name: '한식' }));

        expect(state.region).toBe('한식');
      });
    });
  });

  describe('setCategories', () => {
    it('returns state with categories', () => {
      const initialState = {
        categories: [],
      };
      const categories = [
        {
          id: 1,
          name: '한식',
        },
        {
          id: 2,
          name: '중식',
        },
      ];
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(2);
    });
  });

  describe('setRegions', () => {
    it('returns state with regions', () => {
      const initialState = {
        regions: [],
      };
      const regions = [
        {
          id: 1,
          name: '서울',
        },
        {
          id: 2,
          name: '인천',
        },
      ];
      const state = reducer(initialState, setCategories(regions));

      expect(state.categories).toHaveLength(2);
    });
  });
});
