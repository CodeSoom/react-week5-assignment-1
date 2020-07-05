import RestaurantStore from './stores';

describe('create store', () => {
  it('return store object', () => {
    expect(RestaurantStore).not.toBeNull();
  });
});
