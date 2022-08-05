import { render } from '@testing-library/react';

import RestaurantsResult from './RestaurantsResult';

import {
  restaurants,
} from '../fixtures/staticData';

function customRender() {
  return render(<RestaurantsResult restaurants={restaurants} />);
}

describe('RestaurantsResult', () => {
  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { queryByText } = customRender();

      expect(queryByText('양천주가')).not.toBeNull();
    });
  });
});
