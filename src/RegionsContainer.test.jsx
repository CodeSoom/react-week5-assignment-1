import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const renderRegionsContainer = () => render(<RegionsContainer />);

  it('renders Regions', () => {
    const { container } = renderRegionsContainer();

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
