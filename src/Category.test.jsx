import { fireEvent, render } from '@testing-library/react';

import Category from './Category';

import { categories } from '../__fixture__/restaurantsInfo';

describe('<Category/>', () => {
  const categoryNames = categories.map((region) => region.name);

  const renderCategory = () => ((
    render(<Category categories={categories} />)
  ));

  it('카테고리 목록이 보임.', () => {
    const { getByText } = renderCategory();
    categoryNames.forEach((async (name) => {
      await expect(getByText(name)).not.toBeNull();
    }));
  });

  it('선택된 버튼에 V표시가 보임', () => {
    const { getByText, container } = renderCategory();

    setTimeout(() => {
      fireEvent.click(getByText('한식'));

      expect(container).toHaveTextContent('한식(V)');
    }, 100);
  });
});
