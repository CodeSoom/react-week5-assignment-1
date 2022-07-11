import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { getCategories, getRegions, getRestaurants } from './store/async-actions';

import App from './App';

import regions from './fixtures/regions';
import categories from './fixtures/categories';
import restaurants from './fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./store/async-actions');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderApp() {
    return render((
      <App />
    ));
  }

  it('regions API를 호출합니다.', () => {
    const { container } = renderApp();

    expect(dispatch).toHaveBeenCalledWith(getRegions());

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('categories API를 호출합니다.', () => {
    const { container } = renderApp();

    expect(dispatch).toHaveBeenLastCalledWith(getCategories());

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('restaurants API를 호출합니다.', () => {
    const { container } = renderApp();

    expect(dispatch).toHaveBeenCalledWith(getRestaurants());

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
