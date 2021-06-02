import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { categories } from '../fixtures/categories';
import { regions } from '../fixtures/regions';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
      search: {
        region: '',
        category: '',
      },
    }));
  });

  it('renders region, category, restaurants', () => {
    const { getByRole } = render(<App />);

    regions.forEach(({ name }) => {
      getByRole('button', { name });
    });

    categories.forEach(({ name }) => {
      getByRole('button', { name });
    });
  });

  it('loads regions, categories', () => {
    render(<App />);

    expect(dispatch).toBeCalledTimes(2);
  });
});
