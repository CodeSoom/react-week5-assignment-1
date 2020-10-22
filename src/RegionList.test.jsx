import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RegionList from './RegionList';
import { regionsFixture } from '../fixtures/fixtures';

describe('RegionList', () => {
  const handleSelectClick = jest.fn();

  const regionListRender = ({ regions, regionId }) => render((
    <RegionList
      regions={regions}
      regionId={regionId}
      onSelectRegionClick={handleSelectClick}
    />
  ));

  context('with regions', () => {
    it('see renders regions', () => {
      const regionId = 1;

      const { getByText } = regionListRender({
        regions: regionsFixture,
        regionId,
      });

      regionsFixture.forEach(({ id, name }) => {
        if (regionId === id) {
          expect(getByText(`${name}(V)`)).not.toBeNull();
          return;
        }

        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a region', () => {
      const { getByText } = regionListRender({
        regions: regionsFixture,
        regionId: null,
      });

      regionsFixture.forEach(({ name, id }) => {
        fireEvent.click(getByText(name));

        expect(handleSelectClick).toBeCalledWith({
          type: 'region',
          id,
        });
      });
    });
  });

  context('without regions', () => {
    const regions = [];

    it('nothing render regions', () => {
      const { container } = regionListRender({ regions, regionId: null });

      expect(container).toBeEmptyDOMElement();
    });
  });
});
