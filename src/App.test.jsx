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

  test('화면에 레스트랑 지역 목록이 나온다.', () => {
    const { getByRole, getAllByRole } = render((<App />));

    expect(dispatch).toBeCalledTimes(1);

    expect(getByRole('list')).toBeInTheDocument();
    expect(getAllByRole('button')[0]).toHaveTextContent(regions[0].name);
  });
});
