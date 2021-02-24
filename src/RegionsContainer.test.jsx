import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const useSelector = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
    }));
  });

  it('renders region', () => {
    const { queryByText } = render(<RegionsContainer />);

    expect(queryByText('서울')).not.toBeNull();
  });
});
