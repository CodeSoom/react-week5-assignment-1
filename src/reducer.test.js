import {
  GET_REGIONS_SUCCESS, WATCH_THE_REGION,
} from './actions';
import reducer from './reducer';
import { regions as mockRegions } from './fixtures/mockData';

describe('reducer', () => {
  const initialState = {

    regions: [],
    categories: [],
    restaurants: [],
    error: { regions: null, categories: null, restaurants: null },
  };

  describe('default state', () => {
    context('if there is no action', () => {
      it('shold have default state', () => {
        const {
          regions, categories, restaurants, error,
        } = reducer();

        expect(regions).toHaveLength(0);
        expect(categories).toHaveLength(0);
        expect(restaurants).toHaveLength(0);
        expect(error.regions).toBeNull();
        expect(error.categories).toBeNull();
        expect(error.restaurants).toBeNull();
      });
    });

    context('if there is wrong action', () => {
      it('shold have default state', () => {
        const {
          regions, categories, restaurants, error,
        } = reducer(undefined, { type: '@@INIT' });

        expect(regions).toHaveLength(0);
        expect(categories).toHaveLength(0);
        expect(restaurants).toHaveLength(0);
        expect(error.regions).toBeNull();
        expect(error.categories).toBeNull();
        expect(error.restaurants).toBeNull();
      });
    });
  });
  describe('GET_REGIONS', () => {
    context('GET_REGIONS_SUCCESS', () => {
      it('should update state with regions received from server', () => {
        const changedState = reducer(initialState,
          { type: GET_REGIONS_SUCCESS, payload: mockRegions });
        const { regions } = changedState;

        expect(regions).toHaveLength(6);

        const changedRegions = mockRegions.map((region) => ({ ...region, clicked: false }));

        changedRegions.forEach((region, index) => {
          expect(regions[index]).toMatchObject(region);
        });
      });
    });
  });

  describe('WATCH_THE_REGION', () => {
    it('should update region state with region id', () => {
      const id = 8;
      const changedState = reducer({ ...initialState, regions: mockRegions },
        { type: WATCH_THE_REGION, payload: id });
      const { regions } = changedState;
      const changedRegion = regions.find((region) => region.id === id);

      expect(regions).toHaveLength(6);
      expect(changedRegion.clicked).toBe(true);
    });
  });
});
