import React from 'react';

import { render } from '@testing-library/react';

import RegionButton from './RegionButton';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('RegionButton', () => {
  it('renders "서울" button', () => {
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
