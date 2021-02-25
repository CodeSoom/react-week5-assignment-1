import React from 'react';

import { render } from '@testing-library/react';

import RegionButtons from './RegionButtons';

describe('RegionButtons', () => {
  it('renders restaurant region buttons', () => {
    const { getByText } = render(<RegionButtons />);

    expect(getByText('서울')).not.toBeNull();
  });
});
