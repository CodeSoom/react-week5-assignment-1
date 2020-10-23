import axios from 'axios';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

import { regions, categories, restaurants } from '../../fixtures';

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

  it('fetchRestaurants', async () => {
    const resp = { data: restaurants };
    axios.get.mockResolvedValue(resp);
    const data = await fetchRestaurants({ regionName: '서울', categoryId: '양천주가' });

    expect(data).not.toHaveLength(0);
  });
});
