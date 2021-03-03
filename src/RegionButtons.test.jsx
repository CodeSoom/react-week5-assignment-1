import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RegionButtons from './RegionButtons';

import regions from './__fixture__/regions';

describe('RegionButtons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClick = jest.fn();

  function renderRegionButtons(currentRegion) {
    return render((
      <RegionButtons
        regions={regions}
        onClick={handleClick}
        currentRegion={currentRegion}
      />
    ));
  }

  context('without current region', () => {
    const currentRegion = '';

    it('renders restaurant region buttons', () => {
      const { getByText } = renderRegionButtons(currentRegion);

      expect(getByText('서울')).not.toBeNull();
    });

    it('marks the clicked button', () => {
      const { getByText } = renderRegionButtons();

      fireEvent.click(getByText('서울'));

      expect(handleClick).toBeCalled();
    });
  });

  context('with current region', () => {
    const currentRegion = '서울';

    it('appends "V" mark into the button text', () => {
      const { getByText } = renderRegionButtons(currentRegion);

      expect(getByText('서울(V)')).not.toBeNull();
    });
  });
});
