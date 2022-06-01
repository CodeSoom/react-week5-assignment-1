import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import restaurants from '../../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('지역과 분류를 클릭하면 dispatch가 실행된다', () => {
    useSelector.mockImplementation((selector) =>
      selector({
        regionName: { id: 1, name: '서울' },
        categoryId: { id: 1, name: '한식' },
        restaurants,
      })
    );

    render(<RestaurantsContainer />);

    expect(dispatch).toBeCalled();
  });
});
