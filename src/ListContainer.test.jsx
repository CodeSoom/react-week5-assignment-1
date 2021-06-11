import { render } from '@testing-library/react';

import ListContainer from './ListContainer';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('renders restaurants', () => {
    const { container } = render(<ListContainer restaurants={restaurants} />);

    expect(container).toHaveTextContent('마녀주방|한식|서울시 강남구');
  });
});
