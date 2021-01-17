import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  it('renders', () => {
    const { container } = render(<Regions regions={regions} />);

    expect(container).not.toBeNull();
  });
});
