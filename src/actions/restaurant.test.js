import { loadRegions, TYPES } from './restaurant';
import { fetchRestaurantRegions } from '../api/restaurant';
import { regions } from '../../fixtures/restaurant';

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
});
