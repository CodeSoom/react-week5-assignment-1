import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from './fixtures/cetegories';

jest.mock('react-redux');
test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
    checkedCategoryId: undefined,
  }));

  const { getByText } = render(<CategoriesContainer />);

  categories.forEach((category) => {
    expect(getByText(category.name)).not.toBeNull();
  });
});
