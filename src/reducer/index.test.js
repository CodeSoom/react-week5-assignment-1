import reducer, { initialState } from '.';

import {
  setCategories,
  setRegions,
  changeSearch,
  setRestaurants,
} from '../actions';

import { restaurants } from '../../fixtures/restaurants';

describe('reducer', () => {
  context('when type is invalid', () => {
    it('returns previous state', () => {
      const state = reducer(
        undefined,
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
        const { selected: { region, categoryId } } = reducer(
          {
            selected: {
              region: '부산',
              categoryId: '2',
            },
          },
          changeSearch({
            search: 'region',
            value: '서울',
          }),
        );

        expect(region).toBe('서울');
        expect(categoryId).toBe('2'); // NOTE: 예전 selected값이 잘 넣어져 있는 지 확인하기 위해 추가
      });
    });
  });
});
