import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

import regionsTestData from './fixtures/regions';

describe('Regions', () => {
  it('show all regions', () => {
    const handleClick = jest.fn();

    const initialRegions = regionsTestData;

    const { getByText } = render(
      <Regions
        regions={initialRegions}
        onClick={handleClick}
      />,
    );

    initialRegions.forEach(({ region }) => {
      expect(getByText(`${region}`)).not.toBeNull();

      fireEvent.click(getByText(`${region}`));

      expect(handleClick).toBeCalled();
    });
  });
});
