import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  it('show all regions', () => {
    const handleClick = jest.fn();

    const initialRegions = [
      { id: 1, region: '서울' },
      { id: 2, region: '대구' },
      { id: 3, region: '부산' },
      { id: 4, region: '대전' },
      { id: 5, region: '강원도' },
      { id: 6, region: '광주' },

    ];

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
