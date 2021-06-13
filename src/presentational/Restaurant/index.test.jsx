import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import { restaurants } from '../../../fixtures/restaurants';

describe('Restaurant', () => {
  it('renders restaurant', () => {
    const { getByText } = render(<Restaurant restaurant={restaurants[0].name} />);

    expect(getByText(restaurants[0].name)).toBeInTheDocument();
  });
});
