import { render } from '@testing-library/react';
import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  const renderComponent = () => render(<RestaurantList />);

  it('RestaurantList 컴포넌트 렌더링', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });
});
