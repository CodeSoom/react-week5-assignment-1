import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../../../fixtures/regions';

describe('Regions', () => {
  const handleClickSelectRegion = jest.fn();

  const renderRegion = () => render((
    <Regions
      regions={regions}
      onClickSelectRegion={handleClickSelectRegion}
    />
  ));

  it('renders every region name', () => {
    const { queryByText } = renderRegion();

    regions.forEach(({ name: regionName }) => {
      expect(queryByText(regionName)).not.toBeNull();
    });
  });

  it('calls click handler when user clicks each region name', () => {
    const { queryByText } = renderRegion();

    regions.forEach(({ name: regionName }) => {
      handleClickSelectRegion.mockClear();

      expect(handleClickSelectRegion).not.toBeCalled();

      fireEvent.click(queryByText(regionName));

      expect(handleClickSelectRegion).toBeCalled();
    });
  });
});
