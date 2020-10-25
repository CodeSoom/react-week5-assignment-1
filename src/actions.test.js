import {
  intializeSelectButtons,
  setSelectedButton,
  setRestaurants,
  getRegionAndCategories,
  setRestaurantsAsync,
} from './actions';

import { useSelector, useDispatch } from 'react-redux';

import { regions, categories, restaurants } from '../fixtures/fixture';
import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

jest.mock('react-redux');
jest.mock('./services/api');

describe('intializeSelectButtons', () => {
  it('intializeSelectButtons action이 반환합니다. ', () => {
    const action = intializeSelectButtons({ regions, categories });
    expect(action).toEqual({ type: 'intializeSelectButtons', payload: { regions, categories } });
  });
});

describe('setSelectedButton', () => {
  it('setSelectedButton action이 반환합니다. ', () => {
    const selectedButton = {
      type: 'region',
      value: { id: 1, name: '서울' },
    };
    const action = setSelectedButton(selectedButton);
    expect(action).toEqual({ type: 'setSelectedButton', payload: selectedButton });
  });
});

describe('setRestaurants', () => {
  it('setRestaurants action을 반환합니다. ', () => {
    const action = setRestaurants(restaurants);
    expect(action).toEqual({ type: 'setRestaurants', payload: restaurants });
  });
});
