import { render, screen } from '@testing-library/react';

import { RESTAURANTS } from '../../lib/fixtures';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const renderComponent = (restaurants) =>
    render(<Restaurants restaurants={restaurants} />);

  context('식당 목록이 있으면', () => {
    it('목록을 보여준다 ', () => {
      renderComponent(RESTAURANTS);

      expect(screen.getByText('도산분식')).not.toBeNull();
    });
  });

  context('식당 목록이 없으면', () => {
    it('헬퍼메세지를 보여준다 ', () => {
      renderComponent([]);

      expect(screen.getByText('조건에 맞는 식당이 없어요')).not.toBeNull();
    });
  });
});
