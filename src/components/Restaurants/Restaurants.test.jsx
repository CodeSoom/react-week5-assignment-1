import { render } from '@testing-library/react';
import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('전달된 음식점들을 노출한다.', () => {
    const restaurants = [
      { id: 1, name: '가게이름1' },
    ];
    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    expect(getByText('가게이름1')).not.toBeNull();
  });
});
