import reducer from '.';
import { restaurants } from '../../fixtures/restaurants';
import {
  setCategories,
  setRegions,
  changeSearch,
  setRestaurants,
} from '../actions';

describe('reducer', () => {
  context('when type is invalid', () => {
    it('returns previous state', () => {
      const initialState = {
        restaurants: [],
        categories: [],
        regions: [],
        search: {
          region: '',
          categoryId: '',
        },
      };

      const state = reducer(
        initialState,
        {
          type: '11',
        },
      );

      expect(state).toEqual(initialState);
    });
  });

  context('when type is valid', () => {
    describe('setRegions', () => {
      it('changes restaurant region', () => {
        const { regions } = reducer(
          {
            regions: [],
          },
          setRegions([{
            id: 1,
            name: '부산',
          }]),
        );

        expect(regions).toHaveLength(1);
      });
    });

    describe('setCategories', () => {
      it('changes restaurant categories', () => {
        const { categories } = reducer(
          {
            categories: [],
          },
          setCategories([{
            id: 1,
            name: '한식',
          }]),
        );

        expect(categories).toHaveLength(1);
      });
    });

    describe('setRestaurants', () => {
      it('changes restaurants', () => {
        const state = reducer(
          {
            restaurants: [],
          },
          setRestaurants(restaurants),
        );

        expect(state.restaurants).toBe(restaurants);
      });
    });

    describe('changeSearch', () => {
      it('changes restaurant region', () => {
        const { search: { region } } = reducer(
          {
            search: {
              region: '부산',
            },
          },
          changeSearch({
            search: 'region',
            value: '서울',
          }),
        );

        expect(region).toBe('서울');
      });
    });
  });
});
