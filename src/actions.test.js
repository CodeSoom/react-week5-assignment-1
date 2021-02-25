import { getRegionsThunk } from './actions';
import { regions } from './fixtures/mockData';

jest.mock('./services/api');
describe('actions', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('get regions', async () => {
    const thunk = getRegionsThunk();

    await thunk(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({ type: 'getRegions' });
    expect(dispatch).toHaveBeenCalledWith({ type: 'getRegionsSuccess', payload: regions });
  });
});
