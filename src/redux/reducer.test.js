/* eslint-disable comma-dangle */
import {
  addRestaurant,
  deleteRestaurant, updateAddress, updateCategory,
  updateName, setRestaurants
} from './actions';
import reducer from './reducer';

describe('reducer', () => {
  context('with action.type', () => {
    it('updates name', () => {
      const state = reducer({
        state: {
          name: '',
        },
        action: updateName({ name: '마녀주방' }),
      });

      expect(state.name).toBe('마녀주방');
    });

    it('updates category', () => {
      const state = reducer({
        state: {
          category: '',
        },
        action: updateCategory({ category: '한식' }),
      });

      expect(state.category).toBe('한식');
    });

    it('updates address', () => {
      const state = reducer({
        state: {
          address: '',
        },
        action: updateAddress({ address: '서울시 강남구' }),
      });

      expect(state.address).toBe('서울시 강남구');
    });

    describe('addRestaurant', () => {
      function reduceAddRestaurant({ name, category, address }) {
        return reducer({
          state: {
            newId: 100,
            name,
            category,
            address,
            restaurants: [],
          },
          action: addRestaurant({ name, category, address }),
        });
      }

      context('with name || with category || with address', () => {
        it('can add a new Restaurant', () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          });

          expect(state.restaurants).toHaveLength(1);
          expect(state.restaurants[0].id).not.toBeNull();
          expect(state.restaurants[0].name).toBe('마녀주방');
          expect(state.restaurants[0].category).toBe('한식');
          expect(state.restaurants[0].address).toBe('서울시 강남구');
        });

        it("clears 'name' after addRestaurant", () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          });

          expect(state.name).toBe('');
        });

        it("clears 'category' after addRestaurant", () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          });

          expect(state.category).toBe('');
        });

        it("clears 'address' after addRestaurant", () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          });

          expect(state.address).toBe('');
        });
      });

      context('without name', () => {
        it("can't add restaurants", () => {
          const state = reduceAddRestaurant({
            name: '',
            category: '한식',
            address: '서울시 강남구',
          });

          expect(state.restaurants).toHaveLength(0);
        });
      });

      context('without category', () => {
        it("can't add restaurants", () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '',
            address: '서울시 강남구',
          });

          expect(state.restaurants).toHaveLength(0);
        });
      });

      context('without address', () => {
        it("can't add restaurants", () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '한식',
            address: '',
          });

          expect(state.restaurants).toHaveLength(0);
        });
      });
    });

    describe('deleteRestaurant', () => {
      function reduceDeleteRestaurant({ id }) {
        return reducer({
          state: {
            newId: 100,
            restaurants: [{
              id: 1,
              name: '마녀주방',
              category: '한식',
              address: '서울시 강남구',
            }, {
              id: 2,
              name: '마녀주방',
              category: '한식',
              address: '서울시 강남구',
            }],
          },
          action: deleteRestaurant({ id }),
        });
      }

      it('deletes rataurant with currect id', () => {
        const state = reduceDeleteRestaurant({ id: 1 });

        expect(state.restaurants).toHaveLength(1);
      });

      it("doesn't deletes rataurant with wrong id", () => {
        const state = reduceDeleteRestaurant({ id: 4 });

        expect(state.restaurants).toHaveLength(2);
      });
    });

    describe('setRestaurants', () => {
      function reduceSetRestaurants({ restaurants }) {
        return reducer({
          state: {
            restaurants: [{
              id: 1,
              name: '마녀주방',
              category: '한식',
              address: '서울시 강남구',
            }, {
              id: 2,
              name: '마녀주방',
              category: '한식',
              address: '서울시 강남구',
            }],
          },
          action: setRestaurants({ restaurants }),
        });
      }

      it('sets restaurants with new restaurants', () => {
        const state = reduceSetRestaurants({
          restaurants: [{
            id: 5,
            name: '피카츄',
            category: '포켓몬',
            address: '태초마을'
          }]
        });

        expect(state.restaurants).toHaveLength(1);
      });

      it('sets restaurants with empty array', () => {
        const state = reduceSetRestaurants({
          restaurants: []
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });

  context('without action.type', () => {
    function otherFunction({ id }) {
      return {
        type: 'otherFunction',
        payload: {
          id,
        },
      };
    }

    it("doesn't work", () => {
      const state = reducer({
        state: undefined,
        action: otherFunction({ id: 1 }),
      });

      expect(state.restaurants).toHaveLength(0);
    });
  });
});
