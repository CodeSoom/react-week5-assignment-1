import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

import { CATEGORIES } from './fixture';

describe('Categories', () => {
  const renderComponent = (categories) => render(
    <Categories categories={categories} />,
  );

  it('render', () => {
    const { container } = renderComponent(CATEGORIES);

    expect(container).toHaveTextContent('한식');
  });

  it('카테고리를 클릭하면 V표시가 된다', () => {
    const { container, getByRole } = renderComponent();

    const button = getByRole('button', { name: '한식' });
    fireEvent.click(button);

    expect(container).toHaveTextContent('한식(V)');
  });

  it('카테고리가 없으면 메세지가 출력된다', () => {
    const { container } = renderComponent([]);

    expect(container).toHaveTextContent('카테고리가 존재하지 않습니다');
  });
});
