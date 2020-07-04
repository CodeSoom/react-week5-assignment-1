import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../fixture/test-data';

describe('Regions', () => {
  const handleClick = jest.fn();

  const renderRegions = (regionName) => render((
    <Regions
      regions={regions}
      regionName={regionName}
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders regions buttons', () => {
    const { getByText } = renderRegions();

    regions.forEach((region) => {
      expect(getByText(RegExp(region.name))).not.toBeNull();
    });
  });

  context('when button is clicked', () => {
    it('handleClick is called', () => {
      const { getByText } = renderRegions();

      fireEvent.click(getByText(regions[0].name));

      expect(handleClick).toBeCalled();
    });
  });

  context('when region is selected', () => {
    it('renders V sign on the clicked button', () => {
      const { getByText } = renderRegions('서울');

      expect(getByText(/V/)).not.toBeNull();
    });
  });

  context('when noting is selected', () => {
    it('does not render V sign on all buttons', () => {
      const { queryByText } = renderRegions(undefined);

      expect(queryByText(/V/)).toBeNull();
    });
  });
});
