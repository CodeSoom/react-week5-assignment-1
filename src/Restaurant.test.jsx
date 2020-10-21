import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';
import { restaurantFixture } from '../fixtures/fixtures';

describe('Restaurant', () => {
  const restaurantRender = ({ name }) => render((
    <Restaurant name={name} />
  ));

  it('renders restaurant name', () => {
    restaurantFixture.forEach(({ name }) => {
      const { container } = restaurantRender({ name });

      expect(container).toHaveTextContent(name);
    });
  });
});
