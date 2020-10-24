import React from 'react';

import { render, screen } from '@testing-library/react';

import Regions from './Regions';
import regionsFixture from '../../fixtures/regions';

describe('Regions', () => {
  it('render', () => {
    render(<Regions regions={regionsFixture} />);

    expect(screen.getByText(/서울/)).toBeInTheDocument();
  });
});
