import { render } from '@testing-library/react';

import Restaurants from './Restaurants';
import { restaurants } from '../__fixtures__/data';

describe('<Restaurant />', () => {
  it('renders restaurant', () => {
    const { container } = render((
      <Restaurants
        restaurants={restaurants}
      />
    ));

    expect(container).toHaveTextContent('밀면넘어져요');
  });
});
