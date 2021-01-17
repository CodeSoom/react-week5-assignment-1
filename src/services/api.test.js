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

  describe('fetchRestaurants', () => {
    context('exist regionName && categoryId', () => {
      it('return restaurants', async () => {
        const resp = { data: restaurants };
        axios.get.mockResolvedValue(resp);
        const data = await fetchRestaurants({ regionName: '서울', categoryId: 1 });

        expect(data).not.toHaveLength(0);
      });
    });

    context('not exist regionName && categoryId', () => {
      it('return empty data', async () => {
        const resp = { data: [] };
        axios.get.mockResolvedValue(resp);
        const data = await fetchRestaurants({ regionName: '', categoryId: 0 });

        expect(data).toHaveLength(0);
      });
    });
  });
});
