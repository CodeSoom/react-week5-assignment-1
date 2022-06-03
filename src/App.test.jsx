import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import regions from '../fixture/regions';
import categories from '../fixture/categories';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
  }));

  test('레스트랑 지역, 카테고리 목록이 호출된다.', () => {
    const { getAllByRole, getByText } = render((<App />));

    expect(dispatch).toBeCalledTimes(2);

    expect(getAllByRole('list')).toHaveLength(2);

    expect(getByText(regions[0].name)).toBeInTheDocument();
    expect(getByText(categories[0].name)).toBeInTheDocument();
  });
});
