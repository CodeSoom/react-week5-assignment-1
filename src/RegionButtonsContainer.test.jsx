import React from 'react';

import { render } from '@testing-library/react';

import RegionButtonsContainer from './RegionButtonsContainer';

describe('RegionButtonsContainer', () => {
  it('renders restaurant region buttons', () => {
    const { getByText } = render(<RegionButtonsContainer />);

    expect(getByText('서울')).not.toBeNull();
  });
});
