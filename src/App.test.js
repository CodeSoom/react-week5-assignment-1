import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('renders', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: [],
    }));

    render(<App />);

    expect(dispatch).toBeCalledWith({
      type: 'setCategories',
      payload: { categories: [] },
    });
  });
});
