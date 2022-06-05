import { fireEvent, render } from '@testing-library/react';

import { baseMessage } from '../../constants/emptyMessages';
import categories from '../../fixture/categories';

import Categories from './Categories';

const onClick = jest.fn();

describe('Categories', () => {
  context('업종 목록이 있으면', () => {
    it('화면에 카테고리 값이 나온다', () => {
      const { getByText } = render(<Categories categories={categories} onClick={onClick} />);

      const categoryNameButton = getByText(categories[0].name, { exact: false });

      expect(categoryNameButton).toBeInTheDocument();
    });
  });

  context('업종 목록이 없거나 비어있으면', () => {
    it('업종 목록이 비어있다는 문구가 보인다.', () => {
      const { queryByRole, getByText } = render(<Categories categories={null} />);

      expect(queryByRole('list')).not.toBeInTheDocument();
      expect(getByText(baseMessage('업종 목록')));
    });
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
