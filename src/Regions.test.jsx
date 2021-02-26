import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const renderRegions = () => render((
    <Regions 
      regions={regions} 
      onClickCheck={handleClick} 
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

    categories.forEach((region) => {
      fireEvent.click(queryByText(region.name));
    })  

    expect(handleClick).toBeCalledTimes(regions.length);
  })  
})
