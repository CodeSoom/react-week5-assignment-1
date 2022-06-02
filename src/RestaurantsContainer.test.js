import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('renders', () => {
    useSelector.mockImplementation((selector) => selector({
      restuarants: [
        { id: 1, name: '홍콩반점' },
      ],
    }));

    const { container } = render(<RestaurantsContainer />);

    expect(container).toHaveTextContent('홍콩반점');
  });
});
