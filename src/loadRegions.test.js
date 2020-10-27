describe('asunc action', () => {
  describe('loadCategories', () => {
    it('set categories from server', async () => {
      const dispatch = jest.fn();
      await loadCategories()(dispatch);

      expect(dispatch).toBeCalled();
    });
  });

  describe('loadRestaurants', () => {
    it('set restaurants from server', async () => {
      const dispatch = jest.fn();
      await loadRestaurants({ region: '서울', categoryId: 1 })(dispatch);

      expect(dispatch).toBeCalled();
    });
  });

  describe('loadRegion', () => {
    it('set regions from server', async () => {
      const dispatch = jest.fn();
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalled();
    });
  });
});
