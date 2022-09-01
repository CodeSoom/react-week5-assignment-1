import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../__fixtures__/data';

describe('<Categories />', () => {
  it('shows categories', () => {
    const { queryByText } = render(
      <Categories
        categories={categories}
        selectedRegion="양식"
      />,
    );

    categories.forEach((category) => {
      expect(queryByText(category.name)).not.toBeNull();
    });
  });

  it('clicks each button to check it\'s selected', () => {
    const { getByRole, queryByText } = render(
      <Categories
        categories={categories}
        selectedRegion="양식"
      />,
    );

    categories.forEach((category) => {
      fireEvent.click(getByRole('button', { name: category.name }));
      expect(queryByText(category.name)).toBeEnabled();
    });
  });
});
