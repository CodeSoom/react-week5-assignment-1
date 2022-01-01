import { fireEvent, render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Categories from './Categories';

import categories from './fixtures/cetegories';

jest.mock('react-redux');
test('Categories', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
    checkedCategoryId: undefined,
  }));

  const handleClick = jest.fn();

  const { getByText } = render(
    <Categories
      categories={categories}
      checkedCategoryId={undefined}
      onClick={handleClick}
    />,
  );

  categories.forEach((category) => {
    expect(getByText(category.name)).not.toBeNull();
    fireEvent.click(getByText(category.name));
    expect(handleClick).toBeCalled();
  });
});
