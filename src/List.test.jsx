import { render } from '@testing-library/react';

import List from './List';

// List 구성요소 렌더링
// 1. with restaurant
//  - renders text of restaurant
// 2. without restaurant
//  - renders nothing

describe('List test', () => {
  const renderList = (restaurants) => render(
    <List
      restaurants={restaurants}
    />,
  );

  context('with restaurant', () => {
    it('renders text of restaurant', () => {
      const restaurants = [
        {
          name: '모토쿠라시',
          category: '일식',
          place: '서울 송파구',
        },
      ];
      const { container } = renderList(restaurants);

      expect(container).toHaveTextContent('모토쿠라시');
      expect(container).toHaveTextContent('일식');
      expect(container).toHaveTextContent('서울 송파구');
    });
  });

  context('without restaurant', () => {
    it('renders nothing', () => {
      const restaurants = [];

      const { container } = renderList(restaurants);

      expect(container).toHaveTextContent('');
    });
  });
});
