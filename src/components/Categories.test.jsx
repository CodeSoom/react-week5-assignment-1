import { fireEvent, render } from '@testing-library/react';

import categories from '../../fixture/categories';

import Categories from './Categories';

const onClick = jest.fn();

describe('Categories', () => {
  it('화면에 카테고리 값이 나온다', () => {
    const { getByText } = render(<Categories categories={categories} onClick={onClick} />);

    const categoryNameButton = getByText(categories[0].name, { exact: false });

    expect(categoryNameButton).toBeInTheDocument();
  });

  it('카테고리를 클릭하면 해당 카테고리에 V 표시가 붙는다', () => {
    const { getByText } = render(
      <Categories
        categories={categories}
        selectedId={categories[0].id}
        onClick={onClick}
      />,
    );

    const categoryNameButton = getByText(categories[0].name, { exact: false });

    fireEvent.click(categoryNameButton);

    expect(onClick).toBeCalledWith(categories[0].id);

    expect(categoryNameButton).toHaveTextContent(/V/g);
  });
});
