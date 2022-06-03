import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
    regionId: null,
    categorieId: null,
  }));

  it('render App Title', () => {
    const { getByText } = render(<App />);

    expect(getByText('레스토랑 조회 구현하기').textContent).toBe('레스토랑 조회 구현하기');
  });
});
