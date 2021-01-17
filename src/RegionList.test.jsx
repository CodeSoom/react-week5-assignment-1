import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RegionList from './RegionList';
import { regionsInfo } from '../fixtures/fixtures';

describe('RegionList', () => {
  const handleSelectClick = jest.fn();

  const regionListRender = ({ regions, regionName }) => render((
    <RegionList
      regions={regions}
      selectedRegion={regionName}
      onSelectRegionClick={handleSelectClick}
    />
  ));

  context('with regions', () => {
    it('see renders regions', () => {
      const regionName = '서울';

      const { getByText } = regionListRender({
        regions: regionsInfo,
        regionName,
      });

      regionsInfo.forEach(({ name }) => {
        if (regionName === name) {
          expect(getByText(`${name}(V)`)).not.toBeNull();
          return;
        }

        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a region', () => {
      const { getByText } = regionListRender({
        regions: regionsInfo,
        regionName: null,
      });

      regionsInfo.forEach(({ name }) => {
        fireEvent.click(getByText(name));

        expect(handleSelectClick).toBeCalledWith({
          type: 'region',
          id: name,
        });
      });
    });
  });

  context('without regions', () => {
    const regions = [];

    it('nothing render regions', () => {
      const { container } = regionListRender({ regions, regionName: null });

      expect(container).toBeEmptyDOMElement();
    });
  });
});
