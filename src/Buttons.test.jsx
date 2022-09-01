import { render, fireEvent } from '@testing-library/react';

import Buttons from './Buttons';

import { regions, categories } from '../__fixtures__/list';

describe('<Regions />', () => {
  it('shows regions', () => {
    const { queryByText } = render(
      <Buttons roles={regions} />,
    );

    regions.forEach((region) => {
      expect(queryByText(region.name)).not.toBeNull();
    });
  });

  it('clicks each button to check it\'s selected', () => {
    const { getByRole, queryByText } = render(
      <Buttons roles={regions} />,
    );

    regions.forEach((region) => {
      fireEvent.click(getByRole('button', { name: region.name }));
      expect(queryByText(region.name)).toBeEnabled();
    });
  });
});

describe('<Categories />', () => {
  it('shows categories', () => {
    const { queryByText } = render(
      <Buttons roles={categories} />,
    );

    categories.forEach((category) => {
      expect(queryByText(category.name)).not.toBeNull();
    });
  });

  it('clicks each button to check it\'s selected', () => {
    const { getByRole, queryByText } = render(
      <Buttons roles={categories} />,
    );

    categories.forEach((category) => {
      fireEvent.click(getByRole('button', { name: category.name }));
      expect(queryByText(category.name)).toBeEnabled();
    });
  });
});
