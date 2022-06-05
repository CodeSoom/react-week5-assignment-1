import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import initialState from '../fixture/initialState';
import regions from '../fixture/regions';
import categories from '../fixture/categories';
import restaurants from '../fixture/restaurants';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('레스토랑 지역, 카테고리 목록이 호출된다.', () => {
    useSelector.mockImplementation((selector) => selector({
      ...initialState,
      regions,
      categories,
    }));
    const { getAllByRole, getByText } = render((<App />));

    expect(dispatch).toBeCalledTimes(2);

    expect(getAllByRole('list')).toHaveLength(2);

    expect(getByText(regions[0].name, { exact: false })).toBeInTheDocument();
    expect(getByText(categories[0].name, { exact: false })).toBeInTheDocument();
  });

  describe('지역과 카테고리가 선택되어있으면', () => {
    it('지역, 카테고리, 레스토랑 목록 3가지가 호출된다.', () => {
      useSelector.mockImplementation((selector) => selector({
        ...initialState,
        regions,
        categories,
        restaurants,
        selectedRegion: regions[0].name,
        selectedCategoryId: categories[0].id,
      }));

      render((<App />));

      expect(dispatch).toBeCalledTimes(3);
    });
  });
});
