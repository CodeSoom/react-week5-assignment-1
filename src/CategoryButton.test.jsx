import { render } from '@testing-library/react';

import CategoryButton from './CategoryButton';

import { categories } from '../fixtures/staticData';

const selectedCategory = categories[0];
const unselectedCategory = categories[1];
const onClick = jest.fn();

function customRender(category) {
  const { id, name } = category;
  const selectedCategoryName = categories[0].name;
  return render(
    <CategoryButton
      key={id}
      name={name}
      selectedCategoryName={selectedCategoryName}
      onClick={onClick}
    />,
  );
}

describe('RegionButton', () => {
  context('with 서울 selected', () => {
    test('서울 has check mark', () => {
      const { queryByText } = customRender(selectedCategory);

      expect(queryByText('한식(V)')).not.toBeNull();
    });

    test('대전 does not have check mark', () => {
      const { queryByText } = customRender(unselectedCategory);

      expect(queryByText('중식(V)')).toBeNull();
      expect(queryByText('중식')).not.toBeNull();
    });
  });
});
