import reducer from './reducer';

import regions from '../fixtures/regions'

import categories from '../fixtures/categories';

import {
  setSelected, setRegions, setCategories,
} from './actions';

describe('reducer', () => {
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

  describe('setSelected', () => {
    it('changes selected state', () => {
      const initialState = {
        selected: {
          region: {
            id: '',
            name: '',
          },
          category: {
            id: '',
            name: '',
          },
        }
      }
      const state = reducer(initialState, setSelected({
        region: {
          id: 1,
          name: '서울',
        },
        category: {
          id: 1,
          name: '한식',
        }
      }))

      expect(state.selected.region.name).toBe('서울');
      expect(state.selected.category.name).toBe('한식');
    })
  })
})