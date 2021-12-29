import { render } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../__fixtures__/regions';

jest.mock('react-redux');

describe('Regions', () => {
  context('with regions', () => {
    it('render "region" buttons', () => {
      const { getByRole } = render(
        <Regions regions={regions} />,
      );

      regions.forEach((region) => {
        expect(getByRole('button', { name: region.name })).toBeInTheDocument();
      });
    });

    it('selected button, render region name with (V) ', () => {
      const { getByText } = render(
        <Regions regions={regions} selectedRegion={regions[0]} />,
      );

      expect(getByText(`${regions[0].name}(V)`)).toBeInTheDocument();
    });
  });

  context('without regions', () => {
    it('noting render', () => {
      const { container } = render(
        <Regions regions={[]} />,
      );

      expect(container).toBeEmptyDOMElement();
    });
  });
});
