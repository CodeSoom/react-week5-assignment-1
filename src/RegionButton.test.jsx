import React from 'react';

import { render } from '@testing-library/react';

import RegionButton from './RegionButton';

describe('RegionButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders region button', () => {
    const handleClick = jest.fn();

    const { getByText } = render((
      <RegionButton
        name="서울"
        onClick={handleClick}
        currentRegion=""
      />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
