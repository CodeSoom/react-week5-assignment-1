import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RegionList from './RegionList';
import { regionsFixture } from '../fixtures/fixtures';

describe('RegionList', () => {
  const handleSelectClick = jest.fn();

  const regionListRender = ({ regions, regionState }) => render((
    <RegionList
      regions={regions}
      regionState={regionState}
      onSelectRegionClick={handleSelectClick}
    />
  ));

  const regionState = {
    region: null,
  };

  context('with regions', () => {
    it('see renders regions', () => {
      const { getByText } = regionListRender({
        regions: regionsFixture,
        regionState,
      });

      regionsFixture.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a region', () => {
      const { getByText } = regionListRender({
        regions: regionsFixture,
        regionState,
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
      const { container } = regionListRender({ regions, regionState });

      expect(container).toBeEmptyDOMElement();
    });
  });
});
