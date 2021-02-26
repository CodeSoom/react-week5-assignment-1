import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const checkedRegion = 1;

  const renderRegions = () => render((
    <Regions 
      regions={regions} 
      onClickCheck={handleClick} 
      checkedRegion={checkedRegion}
    />
  ))

  it('renders regions', () => {
    const { queryByText } = renderRegions();
    
    regions.forEach((region) => {
      expect(queryByText(region.name)).not.toBeNull();
    })
  })

  it('clicks region buttons', () => {
    const { queryByText } = renderRegions();

    regions.forEach((region) => {
      fireEvent.click(queryByText(region.name));
    })  

    expect(handleClick).toBeCalledTimes(regions.length);
  })  

  it('shows region buttons with (V)', () => {
    const { queryByText } = renderRegions();
    
    expect(queryByText('서울')).not.toBeNull();
    fireEvent.click(queryByText('서울'));
    expect(queryByText('서울(V)')).not.toBeNull();
  })
})
