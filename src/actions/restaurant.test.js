import { loadRegions, TYPES } from './restaurant';
import { fetchRestaurantRegions } from '../api/restaurant';

jest.mock('../api/restaurant');

describe('restaurant actions', () => {
  it('loadRegions는 regions를 가져오는 api를 호출하고 결과값을 dispatch 한다.', () => {
    const mockDispatch = jest.fn();
    const regions = [{ id: 1, name: 'foo' }];
    const thunk = loadRegions();

    fetchRestaurantRegions.mockImplementation(() => regions);

    thunk(mockDispatch);

    expect(fetchRestaurantRegions).toBeCalled();
    expect(mockDispatch).toBeCalledWith(expect.objectContaining({
      type: TYPES.SET_REGIONS,
      payload: { regions },
    }));
  });
});
