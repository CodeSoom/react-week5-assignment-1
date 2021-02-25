import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RegionButtons from './RegionButtons';

describe('RegionButtons', () => {
  it('renders restaurant region buttons', () => {
    const { getByText } = render(<RegionButtons />);

    expect(getByText('서울')).not.toBeNull();
  });

  it('marks the clicked button', () => {
    const { getByText } = render(<RegionButtons />);

    fireEvent.click(getByText('서울'));

    expect(getByText('서울V')).not.toBeNull();
  });
});
