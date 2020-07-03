import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restaurants } from '../__fixture__/restaurants';

describe('Restaurants', () => {
  context('레스토랑이 있으면', () => {
    it('레스토랑 목록이 표시된다.', () => {
      const { getByText } = render((
        <Restaurants restaurants={restaurants} />
      ));

      expect(getByText('양천주가')).toBeInTheDocument();
    });
  });

  context('레스토랑이 없으면', () => {
    it('레스토랑 목록이 표시되지 않는다.', () => {
      const { container } = render((
        <Restaurants restaurants={[]} />
      ));

      expect(container).toHaveTextContent('');
    });
  });
});
