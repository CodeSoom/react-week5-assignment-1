import React from 'react';

import { render } from '@testing-library/react';

import CategoryButton from './CategoryButton';

describe('CategoryButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders category button', () => {
    const handleClick = jest.fn();

    const { getByText } = render((
      <CategoryButton
        name="한식"
        onClick={handleClick}
        currentRegion=""
      />
    ));

    expect(getByText('한식')).not.toBeNull();
  });
});
