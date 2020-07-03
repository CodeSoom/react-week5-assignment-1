import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

import { regions } from '../fixtures/restaurants';

describe('RestaurantRegions', () => {
  it('show restaurant regions', () => {
    const { getByText } = render((
      <RestaurantRegions regions={regions} />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('지역 클릭 시 이벤트 함수가 호출된다.', () => {
    const handleClick = jest.fn();
    const { getByText } = render((
      <RestaurantRegions
        regions={regions}
        onClick={handleClick}
      />
    ));
    fireEvent.click(getByText('서울'));
    expect(handleClick).toBeCalled();
  });
});
