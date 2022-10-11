import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../fixtures/region';
import categories from '../fixtures/categories';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('Shows regions', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
      restaurants: [],
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledWith(({
      type: 'setRegions',
      payload: { regions },
    }));

    expect(dispatch).toBeCalledWith(({
      type: 'setCategories',
      payload: { categories },
    }));

    expect(queryByText(/서울/)).not.toBeNull();
    expect(queryByText(/한식/)).not.toBeNull();
  });
});
