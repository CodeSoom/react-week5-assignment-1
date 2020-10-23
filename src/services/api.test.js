import axios from 'axios';
import { fetchRegions, fetchCategories } from './api';

import { regions, categories } from '../../fixtures';

jest.mock('axios');

describe('api', () => {
  it('fetchRegions', async () => {
    const resp = { data: regions };
    axios.get.mockResolvedValue(resp);
    const data = await fetchRegions();

    expect(data).not.toHaveLength(0);
  });

  it('fetchCategories', async () => {
    const resp = { data: categories };
    axios.get.mockResolvedValue(resp);
    const data = await fetchCategories();

    expect(data).not.toHaveLength(0);
  });
});
