import React from 'react';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
    { id: 4, name: '부산' },
    { id: 5, name: '광주' },
    { id: 6, name: '강원도' },
    { id: 7, name: '인천' },
  ]

  it('renders category buttons', () => {
    const { getByText } = render(<RegionsContainer regions={regions}/>)
    
    regions.forEach((region) => {
      expect(getByText(region.name)).not.toBeNull();
    })
  })
})
