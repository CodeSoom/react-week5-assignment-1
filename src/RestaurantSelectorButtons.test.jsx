import { render } from '@testing-library/react';

import RestaurantSelectorButtons from './RestaurantSelectorButtons';

import {
  regions,
  region,
  categories,
  category
} from '../fixtures/staticData';

function customRender({ lists, selectedItemName }) {
  return render(<RestaurantSelectorButtons
    lists={lists}
    selectedRegionName={selectedItemName}
  />);
}

describe('Regions', () => {
  context('with regions', () => {
    it('renders with 서울 being checked and others not', () => {
      const { queryByText } = customRender({
        lists: regions,
        selectedItemName: region.name,
      });

      expect(queryByText('서울(V)')).not.toBeNull();

      expect(queryByText('대전(V)')).toBeNull();
      expect(queryByText('대전')).not.toBeNull();
    });
  });

  context('with categories', () => {
    it('renders with 한식 being checked and others not', () => {
      const { queryByText } = customRender({
        lists: categories,
        selectedItemName: category.name,
      });

      expect(queryByText('한식(V)')).not.toBeNull();

      expect(queryByText('중식(V)')).toBeNull();
      expect(queryByText('중식')).not.toBeNull();
    });
  });
});
