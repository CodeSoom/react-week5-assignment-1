import reducer from './reducer';

import regions from '../fixtures/regions'

import categories from '../fixtures/categories';

import {
  chooseRegions, setRegions, setCategories,
} from './actions';

describe('reducer', () => {
  // describe('chooseRegions', () => {
  //   it('chooses region buttons', () => {
  //     const initialState = {
  //       regions: [],
  //     }
  //     const state = reducer(initialState, chooseRegions(regions))

  //     expect(state.regions).not.toHaveLength(0);
  //   })
  // })

  describe('setRegions', () => {
    it('renders region buttons', () => {
      const initialState = {
        regions: [],
      }
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    })
  })

  describe('setCategories', () => {
    it('renders category buttons', () => {
      const initialState = {
        categories: [],
      }
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    })
  })
})