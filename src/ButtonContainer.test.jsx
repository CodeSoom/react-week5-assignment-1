import React from 'react';

import { render } from '@testing-library/react';

import ButtonContainer from './ButtonContainer';

describe('ButtonContainer', () => {
  it('renders', () => {
    const { container } = render(<ButtonContainer />);

    expect(container).not.toBeNull();
  });
});
