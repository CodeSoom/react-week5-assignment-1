import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  function renderRegions(regions) {
    return render((
      <Regions
        regions={regions}
        onClick={handleClick}
      />
    ));
  }

  context('with one or more regions', () => {
    const regions = [
      { id: 1, region: '서울', checked: true },
      { id: 2, region: '경기', checked: false },
      { id: 3, region: '부산', checked: false },
    ];

    it('show regions of restaurant', () => {
      const { getByText } = renderRegions(regions);

      regions.forEach(({ region, checked }) => {
        const buttonText = region + (checked ? '(V)' : '');
        expect(getByText(buttonText)).not.toBeNull();
      });
    });

    it('click region button then checked', () => {
      const { getByText } = renderRegions(regions);

      regions.forEach(({ region, checked }) => {
        const buttonText = region + (checked ? '(V)' : '');
        const button = getByText(buttonText);

        expect(button).not.toBeNull();

        fireEvent.click(button);
      });

      expect(handleClick).toBeCalledTimes(regions.length);
    });
  });

  context('without region', () => {
    it('show nothing message', () => {
      const { getByText } = renderRegions([]);

      expect(getByText(/음식점 지역 정보를 등록해주세요/)).not.toBeNull();
    });
  });
});
