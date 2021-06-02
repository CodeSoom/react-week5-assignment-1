import reducer, {
  selectCategory,
  selectRegion,
} from './selectedSlice';

describe('selectSlice', () => {
  describe('reducer', () => {
    it('updates selected category', () => {
      const oldState = { category: '', region: '' };
      const newState = { category: '한식', region: '' };

      expect(reducer(
        oldState,
        selectCategory('한식'),
      )).toEqual(newState);
    });

    it('updates selected region', () => {
      const oldState = { category: '', region: '' };
      const newState = { category: '', region: '서울' };

      expect(reducer(
        oldState,
        selectRegion('서울'),
      )).toEqual(newState);
    });
  });
});
