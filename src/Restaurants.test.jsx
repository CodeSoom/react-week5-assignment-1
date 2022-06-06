import { render, screen } from '@testing-library/react';

import { RESTAURANTS } from './fixture';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const renderComponent = (restaurants) => render(
    <Restaurants restaurants={restaurants} />,
  );

  context('식당 목록이 있다면', () => {
    it('목록을 보여준다', () => {
      renderComponent(RESTAURANTS);

      expect(screen.getByText('양천주가')).not.toBeNull();
    });
  });

  context('식당 목록이 없다면', () => {
    it('조건에 맞지 않다는 문구가 출력된다', () => {
      renderComponent([]);

      expect(screen.getByText('조건에 맞는 식당이 없어요')).not.toBeNull();
    });
  });
});
