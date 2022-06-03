import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import regions from '../fixture/regions';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  test('레스트랑 지역, 카테고리 목록이 호출된다.', () => {
    const { getAllByRole } = render((<App />));

    expect(dispatch).toBeCalledTimes(2);

    expect(getAllByRole('list')).toHaveLength(2);
    expect(getAllByRole('button')[0]).toHaveTextContent(regions[0].name);
  });
});
