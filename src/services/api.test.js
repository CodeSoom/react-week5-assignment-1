import axios from 'axios';
import { fetchRegions } from './api';

import { regions } from '../../fixtures';

jest.mock('axios');

describe('api', () => {
  it('fetchRegions', async () => {
    const resp = { data: regions };
    axios.get.mockResolvedValue(resp);
    const data = await fetchRegions();

    expect(data).not.toHaveLength(0);
  });
});
