import { GET_REGIONS, GET_REGIONS_SUCCESS, GET_REGIONS_FAILURE } from './actions';
import reducer from './reducer';

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
        const changedState = reducer(initialState, { type: GET_REGIONS_SUCCESS });
        const mockRegions = ['서울', '인천', '대구', '부산', '울산', '광주'];
        const { regions } = changedState;

        expect(regions).toHaveLength(6);
        expect(regions.includes(mockRegions[0])).toBe(true);
        expect(regions.includes(mockRegions[1])).toBe(true);
        expect(regions.includes(mockRegions[2])).toBe(true);
        expect(regions.includes(mockRegions[3])).toBe(true);
        expect(regions.includes(mockRegions[4])).toBe(true);
        expect(regions.includes(mockRegions[5])).toBe(true);
      });
    });
  });
});
