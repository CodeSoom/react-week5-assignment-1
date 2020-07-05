import reducer from './reducer';

import {
  setRegions,
  selectRegion,
  setCategories,
  selectCategory,
} from './actions';

describe('reducer', () => {
  context('with action matched', () => {
    describe('setRegions', () => {
      it('changes Regions array', () => {
        const initialState = {
          regions: [],
        };
        const regions = [
          { id: 1, name: '서울' },
        ];

        const state = reducer(initialState, setRegions(regions));

        expect(state.regions).not.toHaveLength(0);
      });
    });
    describe('setCategories', () => {
      it('changes Categories array', () => {
        const initialState = {
          categories: [],
        };
        const categories = [
          { id: 1, name: '한식' },
        ];

        const state = reducer(initialState, setCategories(categories));

        expect(state.categories).toHaveLength(1);
      });
    });
    describe('selectRegion', () => {
      it('selects a region', () => {
        const initialState = {
          selectedRegion: null,
          regions: [
            { id: 1, name: '서울' },
          ],
        };
        const state = reducer(initialState, selectRegion(1));

        expect(state.selectedRegion).toEqual({
          id: 1,
          name: '서울',
        });
      });
    });
    describe('selectCategory', () => {
      it('selects a category', () => {
        const initialState = {
          selectedCategory: null,
          categories: [
            { id: 1, name: '한식' },
          ],
        };
        const state = reducer(initialState, selectCategory(1));

        expect(state.selectedCategory).toEqual({
          id: 1,
          name: '한식',
        });
      });
    });
  });
  context('without action matched', () => {
    describe('default action', () => {
      it('returns state without changes', () => {
        const initialState = {
          regions: [],
        };
        const state = reducer(initialState, () => {});

        expect(state).toEqual(initialState);
      });
    });
  });
});
