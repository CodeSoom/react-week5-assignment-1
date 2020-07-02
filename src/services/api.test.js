describe('api', () => {
  describe('fetchInitRegions', () => {
    it('fetch initRegions', async () => {
      const rate = await fetchInitRegions();

      expect(rate).toEqual(regions);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
