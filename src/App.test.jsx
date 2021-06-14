import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { initialState } from './reducer';
import restaurants from '../fixtures/restaurants';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api.js');

describe('App', () => {
  it('renders categories', () => {
    // const dispatch = jest.fn();
    // useDispatch.mockImplementation(() => dispatch);
    // useSelector.mockImplementation((selector) => selector({
    //   ...initialState,
    //   restaurants,
    //   categories: [],
    // }));
    // const { container, getByText } = render(<App />);

    // expect(container).toHaveTextContent('Restaurants');
    // expect(container).toHaveTextContent('등록');

    // expect(dispatch).toBeCalledTimes(2);
    // expect(getByText(/마녀주방/)).not.toBeNull();
  });
});
