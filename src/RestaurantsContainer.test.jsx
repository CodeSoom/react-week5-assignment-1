// Container Components:
// 레스토랑 목록을 스토어에서 가져와서 Restaurants컴포넌트에 넘겨주는 것에 대한 테스트
import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/fixture';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const renderRestaurantsContainer = () => render((<RestaurantsContainer />));

  it('sets restaurants', () => {
    const { container } = renderRestaurantsContainer();

    expect(container).toHaveTextContent('모토쿠라시');
    expect(container).toHaveTextContent('일식');
    expect(container).toHaveTextContent('서울시 송파구');
  });
});
