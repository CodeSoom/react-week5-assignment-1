import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    selectedRegionName: '',
    selectedCategoryId: '',
    regions,
    categories,
    restaurants,
  }));

  const renderApp = () => render(<App />);

  it('"loadRegions"와 "loadCategories" 액션을 dispatch한다', () => {
    renderApp();

    expect(dispatch).toBeCalledTimes(2);
  });

  it('regions 버튼과 categories 버튼을 렌더한다', () => {
    const { getByRole } = renderApp();

    regions.forEach((region) => {
      expect(getByRole('button', { name: region.name })).toBeInTheDocument();
    });

    categories.forEach((category) => {
      expect(getByRole('button', { name: category.name })).toBeInTheDocument();
    });
  });
});
