import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

import { regions } from '../fixtures/restaurants';

describe('RestaurantRegions', () => {
  it('레스토랑 지역 목록을 보여준다.', () => {
    const { getByText } = render((
      <RestaurantRegions regions={regions} />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
      expect(getByText(name)).toHaveAttribute('type', 'button');
    });
  });

  it('지역을 클릭하면 화면에 표시한다.', () => {
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
