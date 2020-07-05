import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

describe('Restaurants', () => {
  describe('상위 컴포넌트에서 받은 props 테스트', () => {
    test('value를 목록으로 출력', () => {
      const { getByText } = render((
        <Restaurants
          restaurants={restaurants}
        />
      ));

      expect(getByText(/양천주가/)).not.toBeNull();
    });
  });
});
