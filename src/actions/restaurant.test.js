import { loadCategories, loadRegions, TYPES } from './restaurant';
import { fetchRestaurantCategories, fetchRestaurantRegions } from '../api/restaurant';
import { categories, regions } from '../../fixtures/restaurant';

jest.mock('../api/restaurant');

describe('restaurant actions', () => {
  it('loadRegions는 regions를 가져오는 api를 호출하고 결과값을 dispatch 한다.', async () => {
    const mockDispatch = jest.fn();
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
    const mockDispatch = jest.fn();
    const thunk = loadCategories();

    fetchRestaurantCategories.mockImplementation(() => categories);

    await thunk(mockDispatch);

    expect(fetchRestaurantRegions).toBeCalled();
    expect(mockDispatch).toBeCalledWith(expect.objectContaining({
      type: TYPES.SET_CATEGORIES,
      payload: { categories },
    }));
  });
});
