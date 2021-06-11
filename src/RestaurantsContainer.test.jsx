import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import restaurants from '../fixtures/restaurants';
import { initialState } from './reducer';
import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('renders restaurants page', () => {
    useSelector.mockImplementation((selector) => selector({ ...initialState, restaurants }));
    const { getByText } = render(<RestaurantsContainer />);

    expect(getByText(/마녀주방/)).not.toBeNull();
    // expect(container).toHaveTextContent('마녀주방|한식|서울시 강남구');
  });
});
