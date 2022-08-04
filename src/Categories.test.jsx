import { render } from '@testing-library/react';

import Categories from './Categories';

import { categories, category } from '../fixtures/staticData';

function customRender() {
  return render(<Categories categories={categories} selectedCategoryName={category.name} />);
}

describe('Categories', () => {
  context('with 한식 selected', () => {
    test('한식 has check mark', () => {
      const { queryByText } = customRender();

      expect(queryByText('한식(V)')).not.toBeNull();
    });
    test('중식 does not have check mark', () => {
      const { queryByText } = customRender();

      expect(queryByText('중식(V)')).toBeNull();
      expect(queryByText('중식')).not.toBeNull();
    });
  });
});
