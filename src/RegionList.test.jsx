import React from 'react';

import { render } from '@testing-library/react';

import RegionList from './RegionList';
import { regionsFixture } from '../fixtures/fixtures';

describe('List', () => {
  const listRender = (regions) => render((
    <RegionList
      regions={regions}
    />
  ));

  context('with regions', () => {
    it('see renders regions', () => {
      const { getByText } = listRender(regionsFixture);

      regionsFixture.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });
  });

  context('without regions', () => {
    const regions = [];

    it('nothing render regions', () => {
      const { container } = listRender(regions);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
