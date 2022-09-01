import { render } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../__fixtures__/list';

describe('<Regions />', () => {
  it('shows regions', () => {
    const { queryByText } = render(
      <Regions
        regions={regions}
        selectedRegion="부산"
      />,
    );

    regions.forEach((region) => {
      expect(queryByText(region.name)).not.toBeNull();
    });
  });

  context('with selected', () => {
    it('renders region with check mark(V)', () => {
      const { getByText } = render(
        <Regions
          regions={regions}
          selectedRegion="부산"
        />,
      );

      expect(getByText('부산(V)')).not.toBeNull();
    });
  });
});
