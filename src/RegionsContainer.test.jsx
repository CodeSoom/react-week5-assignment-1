import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { regions } from '../fixtures';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });

  it('renders region buttons', () => {
    const { queryByText } = render(<RegionsContainer />);

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('대전')).not.toBeNull();
    expect(queryByText('대구')).not.toBeNull();
  });
});
