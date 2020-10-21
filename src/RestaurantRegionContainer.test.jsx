import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegionContainer from './RestaurantRegionContainer';

describe('RestaurantRegionContainer', () => {
  it('shows title', () => {
    const { getByText } = render((
      <RestaurantRegionContainer />
    ));

    expect(getByText('Restaurant Regions')).not.toBeNull();
  });

  context('with region information', () => {
    it('show regions of restaurant ', () => {
      const { getByText } = render((
        <RestaurantRegionContainer />
      ));

      expect(getByText('서울')).not.toBeNull();
    });
  });

  context('without region information', () => {
    it('show nothing message', () => {
      const { getByText } = render((
        <RestaurantRegionContainer />
      ));

      expect(getByText(/음식점 지역 정보를 등록해주세요/)).not.toBeNull();
    });
  });
});
