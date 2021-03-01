import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const regions = [
    { id: 1, name: '서울' },
  ];

  it('show all regions', () => {
    const selectedRegionId = 0;
    const clickHandle = jest.fn();
    const { getByText } = render((
      <Regions
        regions={regions}
        selectedRegionId={selectedRegionId}
        onClick={clickHandle}
      />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
  context('if region is not selected', () => {
    it('show name without (v)', () => {
      const selectedRegionId = 0;
      const clickHandle = jest.fn();
      const { getByText } = render((
        <Regions
          regions={regions}
          selectedRegionId={selectedRegionId}
          onClick={clickHandle}
        />
      ));

      expect(getByText('서울')).not.toBeNull();
    });
  });
  context('if regions is selected', () => {
    it('append (v) after name', () => {
      const selectedRegionId = 1;
      const clickHandle = jest.fn();
      const { getByText } = render((
        <Regions
          regions={regions}
          selectedRegionId={selectedRegionId}
          onClick={clickHandle}
        />
      ));

      expect(getByText('서울(v)')).not.toBeNull();
    });
  });

  describe('if regions is clicked', () => {
    it('append (v) after region name', () => {
      const handleClick = jest.fn();
      const selectedRegionId = 0;
      const { getByText } = render((
        <Regions
          regions={regions}
          selectedRegionId={selectedRegionId}
          onClick={handleClick}
        />
      ));

      expect(getByText('서울')).not.toBeNull();
      fireEvent.click(getByText('서울'));
      expect(handleClick).toBeCalled();
    });
  });
});
