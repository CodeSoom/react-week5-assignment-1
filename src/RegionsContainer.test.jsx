import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, title: '서울' }],
    }));
  });

  it('renders regions', () => {
    const { queryByText } = render(<RegionsContainer />);
    expect(queryByText('서울')).not.toBeNull();
  });
});
