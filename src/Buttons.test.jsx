import React from 'react';

import { render } from '@testing-library/react';

import Buttons from './Buttons';

import { regions } from '../fixtures/restaurants';

describe('Buttons', () => {
  it('button들을 보여준다.', () => {
    const { queryByText } = render((
      <Buttons buttons={regions} />
    ));

    regions.forEach((button) => {
      const { name } = button;

      expect(queryByText(name)).not.toBeNull();
    });
  });
});
