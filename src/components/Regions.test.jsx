import React from 'react';

import { render, screen } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  it('render', () => {
    render(<Regions regions={[]} />);

    expect(screen.getByText(/서울/)).toBeInTheDocument();
  });
});
