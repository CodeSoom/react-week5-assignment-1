import { render } from '@testing-library/react';
import RestaurantListContainer from './RestaurantListContainer';

describe('RestaurantListContainer', () => {
  const renderComponent = () => render(<RestaurantListContainer />);

  it('RestaurantListContainer 컴포넌트 렌더링', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });
});
