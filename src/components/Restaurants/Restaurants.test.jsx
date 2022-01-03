import { render } from '@testing-library/react';

import Restaurants from './Restaurants';
import { restaurants } from '../../fixtures';

describe('Restaurants', () => {
  it('전달된 음식점들을 노출한다.', () => {
    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    expect(getByText('양천주가')).not.toBeNull();
  });
});
