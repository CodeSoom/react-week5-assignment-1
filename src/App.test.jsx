import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';
import { setRegions } from './actions';

jest.mock('react-redux');

describe('App', () => {
  it('레스토랑 지역 목록 렌더링', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
    useDispatch.mockImplementation(() => dispatch);

    render(<App />);

    expect(dispatch).toBeCalledWith(setRegions({ regions }));
  });
});
