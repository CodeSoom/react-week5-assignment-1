describe('reducer', () => {
  context('존재하는 액션 타입이면', () => {
    describe('setRegions', () => {
      it('sets regions with new regions', () => {});
    });

    describe('setCategories', () => {
      it('sets categories with new categories', () => {});
    });

    describe('setRestaurants', () => {
      it('sets restaurants with new restaurants', () => {});
    });
    describe('changeRegion', () => {
      it('change region', () => {});
    });
    describe('changeCategory', () => {
      it('change category', () => {});
    });
  });

  context('존재하지 않는 액션 타입이면', () => {
    it("state doesn't change", () => {});
  });
});
