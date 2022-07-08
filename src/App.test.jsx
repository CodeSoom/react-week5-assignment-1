import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

import { fetchCategories } from './services/api';

import App from './App';

jest.mock('./services/api');
jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    regions,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders regions', () => {
    const { container } = render(<App />);

    regions
      .map((region) => region.name)
      .forEach(
        (regionName) => expect(container).toHaveTextContent(regionName),
      );
  });

  it('renders fetched categories', () => {
    const { container } = render(<App />);

    expect(fetchCategories).toHaveBeenCalled();
    categories
      .map((category) => category.name)
      .forEach(
        (categoryName) => expect(container).toHaveTextContent(categoryName),
      );
  });
});
