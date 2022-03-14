import {
  loadCategories,
  loadRegions,
  loadRestaurants,
  TYPES,
} from './restaurant';
import {
  fetchRestaurantCategories,
  fetchRestaurantRegions,
  fetchRestaurants,
} from '../api/restaurant';
import {
  categories,
  regions,
  restaurants,
} from '../../fixtures/restaurant';

jest.mock('../api/restaurant');

describe('restaurant actions', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('loadRegions는 regions를 가져오는 api를 호출하고 결과값을 dispatch 한다.', async () => {
    const thunk = loadRegions();

    fetchRestaurantRegions.mockImplementation(() => regions);

    await thunk(mockDispatch);

    expect(fetchRestaurantRegions).toBeCalled();
    expect(mockDispatch).toBeCalledWith(expect.objectContaining({
      type: TYPES.SET_REGIONS,
      payload: { regions },
    }));
  });

  it('loadCategories는 categories를 가져오는 api를 호출하고 결과값을 dispatch 한다.', async () => {
    const thunk = loadCategories();

    fetchRestaurantCategories.mockImplementation(() => categories);

    await thunk(mockDispatch);

    expect(fetchRestaurantCategories).toBeCalled();
    expect(mockDispatch).toBeCalledWith(expect.objectContaining({
      type: TYPES.SET_CATEGORIES,
      payload: { categories },
    }));
  });

  it('loadRestaurants는 restaurants를 가져오는 api를 호출하고 결과값을 dispatch 한다.', async () => {
    const thunk = loadRestaurants({});

    fetchRestaurants.mockImplementation(() => restaurants);

    await thunk(mockDispatch);

    expect(fetchRestaurants).toBeCalled();
    expect(mockDispatch).toBeCalledWith(expect.objectContaining({
      type: TYPES.SET_RESTAURANTS,
      payload: { restaurants },
    }));
  });
});
