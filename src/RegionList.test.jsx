import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RegionList from './RegionList';
import { regionsFixture } from '../fixtures/fixtures';

describe('RegionList', () => {
  const handleSelectClick = jest.fn();

  const regionListRender = (regions) => render((
    <RegionList
      regions={regions}
      onSelectRegionClick={handleSelectClick}
    />
  ));

  context('with regions', () => {
    it('see renders regions', () => {
      const { getByText } = regionListRender(regionsFixture);

      regionsFixture.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a region', () => {
      const { getByText } = regionListRender(regionsFixture);

      regionsFixture.forEach(({ name, id }) => {
        fireEvent.click(getByText(name));

        expect(handleSelectClick).toBeCalledWith(id);
      });
    });
  });

  context('without regions', () => {
    const regions = [];

    it('nothing render regions', () => {
      const { container } = regionListRender(regions);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
