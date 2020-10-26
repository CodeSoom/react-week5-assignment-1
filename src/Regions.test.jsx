import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  function renderRegions(selectedRegionId, regions) {
    return render((
      <Regions
        selectedRegionId={selectedRegionId}
        regions={regions}
        onClick={handleClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with regions', () => {
    const regions = [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
    ];

    it('show regions of restaurant', () => {
      const { getByText } = renderRegions(0, regions);

      regions.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });

    it('click region button', () => {
      const { getByText } = renderRegions(0, regions);

      regions.forEach(({ name }) => {
        const button = getByText(name);

        expect(button).not.toBeNull();

        fireEvent.click(button);
      });

      expect(handleClick).toBeCalledTimes(regions.length);
    });

    it('shows a selected button', () => {
      const selectedRegionId = 1;
      const { getByText } = renderRegions(selectedRegionId, regions);

      regions.forEach(({ id, name }) => {
        const buttonText = name + (id === selectedRegionId ? '(V)' : '');

        expect(getByText(buttonText)).not.toBeNull();
      });
    });
  });

  context('without region', () => {
    it('show nothing message', () => {
      const { getByText } = renderRegions([]);

      expect(getByText(/지역 정보가 없습니다/)).not.toBeNull();
    });
  });
});
