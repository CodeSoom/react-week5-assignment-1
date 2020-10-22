import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import regions from '../__fixtures__/regions';

import Regions from './Regions';

describe('Regions', () => {
  const handleClickRegion = jest.fn();

  const renderRegions = () => render(
    <Regions regions={regions} onClick={handleClickRegion} />,
  );

  it('renders button', () => {
    const { getByText } = renderRegions();

    expect(getByText('서울')).not.toBeNull();
  });

  context('when buttion is clicked', () => {
    it('called onClick', () => {
      const { getByText } = renderRegions();

      expect(handleClickRegion).not.toBeCalled();

      fireEvent.click(getByText('서울'));

      expect(handleClickRegion).toBeCalled();
    });
  });
});
