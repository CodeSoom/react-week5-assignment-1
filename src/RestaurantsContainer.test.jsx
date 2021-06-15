import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
jest.mock('./services/api.js');

describe('RestaurantsContainer', () => {
  it('renders restaurants', () => {
    // const dispatch = jest.fn();
    // useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [{ id: 1, name: '마녀주방' }],
    }));

    const { container } = render(<RestaurantsContainer />);

    expect(container).toHaveTextContent(/마녀주방/);
  });
});
