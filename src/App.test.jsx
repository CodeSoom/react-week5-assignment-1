import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('앱이 랜더링된다', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
      categories: [],
      regions: [],
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledTimes(3);
    expect(queryByText('서울')).toBeNull();
  });
});
