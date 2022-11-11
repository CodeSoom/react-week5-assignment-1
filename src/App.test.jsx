import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('App이 랜더링된다', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledTimes(3);

    expect(queryByText(/서울/)).toBeNull();
  });
});
