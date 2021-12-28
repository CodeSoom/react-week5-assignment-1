import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';
import { CATEGORIES, REGIONS } from './fixtures';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      categories: CATEGORIES,
      regions: REGIONS,
      categoryId: 0,
      region: '',
      restaurants: [],
    })
  );

  it('render', () => {
    render(<App />);
  });
});
