import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';
import { CATEGORIES } from './fixture';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: CATEGORIES,
  }));

  it('App', () => {
    render(<App />);
  });
});
