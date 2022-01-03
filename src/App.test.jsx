import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { categories } from '../__fixtures__/categories';
import { regions } from '../__fixtures__/regions';
import { restaurants } from '../__fixtures__/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
    selectedRegion: '',
    selectedCategory: '',
  }));

  context('when load', () => {
    it('set regions and categories', () => {
      render(<App />);

      // TODO: changes test, redux-thunk 테스트 형태로 변경 예정 with redux-mock-store
      expect(dispatch).toBeCalledTimes(2);
    });

    it('render regions and categories', () => {
      const { getByRole, getByText } = render(<App />);

      regions.forEach((region) => {
        expect(getByRole('button', { name: region.name })).toBeInTheDocument();
      });

      categories.forEach((category) => {
        expect(getByRole('button', { name: category.name })).toBeInTheDocument();
      });

      restaurants.forEach((restaurant) => {
        expect(getByText(restaurant.name)).toBeInTheDocument();
      });
    });
  });
});
