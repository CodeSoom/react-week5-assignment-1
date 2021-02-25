import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  context('without restaurants', () => {
    const restaurants = [];

    it('renders restaurants', () => {
      const { queryByText } = render((
        <Restaurants
          restaurants={restaurants}
        />
      ));

      expect(queryByText(/레스토랑 목록이 없습니다/)).not.toBeNull();
    });
  });

  context('with restaurants', () => {
    const restaurants = ['홍콩반점', '포방터 돈까스'];

    it('renders restaurants', () => {
      const { getByText } = render((
        <Restaurants
          restaurants={restaurants}
        />
      ));

      expect(getByText('홍콩반점')).not.toBeNull();
      expect(getByText('포방터 돈까스')).not.toBeNull();
    });
  });
});
