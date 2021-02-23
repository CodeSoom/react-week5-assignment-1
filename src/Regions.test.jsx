import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {

  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
    { id: 4, name: '부산' },
    { id: 5, name: '광주' },
    { id: 6, name: '강원도' },
    { id: 7, name: '인천' },
  ]

  function renderRegions({ regions }) {
    return render((
      <Regions regions={regions} />
    ))
  }

  it('renders regions', () => {
    const { queryByText } = renderRegions({ regions })
    
    regions.forEach((region) => {
      expect(queryByText(region.name)).not.toBeNull();
    })
    //expect(queryByText(/서울/)).not.toBeNull();
    //expect(queryByText(/대전/)).not.toBeNull();
    //expect(queryByText(/대구/)).not.toBeNull();
    //expect(queryByText(/부산/)).not.toBeNull();
    //expect(queryByText(/광주/)).not.toBeNull();
    //expect(queryByText(/강원도/)).not.toBeNull();
    //expect(queryByText(/인천/)).not.toBeNull();
  })
})
