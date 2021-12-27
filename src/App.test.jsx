import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [],
  }));

  it('set categories, when load', () => {
    render(<App />);

    expect(dispatch).toBeCalled();
  });
});
