import React from 'react';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  it('renders', () => {
    const { container } = render(<RegionsContainer />);

    expect(container).not.toBeNull();
  });
});
