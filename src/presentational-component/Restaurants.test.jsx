import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restaurants } from '../../fixtures/fixtures';

describe('Restaurants', () => {
  function renderButtonList() {
    return render((
      <Restaurants
        restaurants={restaurants}
      />
    ));
  }

  it('show restaurants', () => {
    const { container } = renderButtonList();
    expect(container).toHaveTextContent(restaurants[0].name);
  });
});
