import reducer from './reducer';

import { setRestaurants, updateFilter } from './actions';

describe('reducer', () => {
  context('without state nor action', () => {
    const initialState = {
      filter: {
        region: '',
        categoryId: 0,
      },
      restaurants: [],
    };
    it('returns state', () => {
      expect(reducer()).toEqual(initialState);
    });
  });

  context('with action', () => {
    describe('updateFilter', () => {
      it('updates filter', () => {
        const previousState = {
          filter: {
            region: '서울',
            categoryId: 1,
          },
        };

        const state = reducer(
          previousState,
          updateFilter({ filter: { region: '서울' } }),
        );

        expect(state.filter.region).toBe('서울');
      });
    });

    describe('setRestaurants', () => {
      it('sets restaurants', () => {
        const previousState = {
          restaurants: [],
        };

        const state = reducer(
          previousState,
          setRestaurants({
            restaurants: [
              {
                id: 1,
                categoryId: 1,
                name: '양천주가',
                address: '서울 강남구 123456',
                information: '양천주가 in 서울 강남구 123456',
              },
            ],
          }),
        );

        expect(state.restaurants).toHaveLength(1);
      });
    });
  });
});
