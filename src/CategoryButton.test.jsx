import React from 'react';

import { render } from '@testing-library/react';

import CategoryButton from './CategoryButton';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('CategoryButton', () => {
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
