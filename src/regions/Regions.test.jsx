import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../../fixtures/regions';

describe('Regions', () => {
  it('renders each, calls click handler on each', () => {
    const handleClickSelectRegion = jest.fn();

    const { queryByText } = render((
      <Regions regions={regions} onClickSelectRegion={handleClickSelectRegion} />
    ));

    regions.forEach(({ name }) => {
      jest.clearAllMocks();

      expect(queryByText(new RegExp(name))).not.toBeNull();

      expect(handleClickSelectRegion).not.toBeCalled();

      fireEvent.click(queryByText(new RegExp(name)));

      expect(handleClickSelectRegion).toBeCalled();
    });
  });
});
