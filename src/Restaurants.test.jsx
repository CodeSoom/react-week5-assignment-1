import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from './__fixture__/restaurants';

describe('Restaurants', () => {
  context('without restaurants', () => {
    it('renders restaurants', () => {
      const { queryByText } = render((
        <Restaurants
          restaurants={[]}
        />
      ));

      expect(queryByText(/레스토랑 목록이 없습니다/)).not.toBeNull();
    });
  });

  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { getByText } = render((
        <Restaurants
          restaurants={restaurants}
        />
      ));

      expect(getByText('양천주가')).not.toBeNull();
      expect(getByText('한국식 초밥')).not.toBeNull();
    });
  });
});
