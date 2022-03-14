import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RestaurantListContainer from './RestaurantListContainer';
import { RESTAURANTS } from './fixture';

jest.mock('react-redux');

describe('RestaurantListContainer', () => {
  const renderRestaurantListContainer = () => render(<RestaurantListContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurants: RESTAURANTS,
    }));
  });

  it('RestaurantListContainer 컴포넌트 렌더링', () => {
    const { container } = renderRestaurantListContainer();

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 가게 리스트가 노출된다.', () => {
    const { container } = renderRestaurantListContainer();

    expect(container).toHaveTextContent(/한국식 초밥/);
    expect(container).toHaveTextContent(/양천주가/);
  });
});
