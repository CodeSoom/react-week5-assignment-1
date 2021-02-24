import React from 'react';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  it('renders category buttons', () => {
    const { getByText } = render(<RegionsContainer />)

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
    expect(getByText('양식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
  })
})
