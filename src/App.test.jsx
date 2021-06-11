import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { initialState } from './reducer';
import { setRestaurants } from './actions';
import restaurants from '../fixtures/restaurants';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('renders restaurants page', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      ...initialState,
      restaurants,
      categories: [],
    }));
    const { container, getByText } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
    expect(container).toHaveTextContent('등록');

    // expect(dispatch).toBeCalledWith(setRestaurants(restaurants));
    // expect(getByText(/마녀주방/)).not.toBeNull();
  });
});
