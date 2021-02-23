import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });

  it('button들을 보여준다.', () => {
    const { queryByText } = render(<RegionsContainer />);

    regions.forEach((region) => {
      const { name } = region;

      expect(queryByText(name)).not.toBeNull();
    });
  });
});
