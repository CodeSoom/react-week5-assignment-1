import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const renderRestaurantsContainer = () => render((<RestaurantsContainer />));

  it('sets restaurants', () => {
    const { container } = renderRestaurantsContainer();

    expect(container).toHaveTextContent('모토쿠라시');
    expect(container).toHaveTextContent('일식');
    expect(container).toHaveTextContent('서울시 송파구');
  });
});
