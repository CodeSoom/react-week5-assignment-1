import reducer from './reducer';

import {
  checkRegion,
  checkCategory,
} from './actions';

describe('reducer', () => {
  describe('checkRegion', () => {
    context('with V sign', () => {
      it('remove V sign', () => {
        const state = reducer({
          regions: [
            { id: 1, name: '서울(V)' },
          ],
        }, checkRegion(1));

        expect(state.regions[0].name).toBe('서울');
      });
    });

    context('without V sign', () => {
      it('add V sign', () => {
        const state = reducer({
          regions: [
            { id: 1, name: '서울' },
          ],
        }, checkRegion(1));

        expect(state.regions[0].name).toBe('서울(V)');
      });
    });
  });

  describe('checkCategory', () => {
    context('with V sign', () => {
      it('remove V sign', () => {
        const state = reducer({
          categories: [
            { id: 1, name: '한식(V)' },
          ],
        }, checkCategory(1));

        expect(state.categories[0].name).toBe('한식');
      });
    });

    context('without V sign', () => {
      it('add V sign', () => {
        const state = reducer({
          categories: [
            { id: 1, name: '한식' },
          ],
        }, checkCategory(1));

      expect(state.categories[0].name).toBe('한식(V)');
      });
    });
  });
});
