import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
  ];

  function renderCategories(clickedCategory) {
    return render((
      <Categories
        categories={categories}
        clickedCategory={clickedCategory}
        onClick={handleClick}
      />
    ));
  }

  it('renders', () => {
    const clickedCategory = { id: '', name: '' };

    const { container } = renderCategories(clickedCategory);

    expect(container).toHaveTextContent('한식');
  });

  it("Adds '(v)' when click the category button", () => {
    const clickedCategory = { id: 2, name: '중식' };

    const { container, getByText } = renderCategories(clickedCategory);

    expect(container).toHaveTextContent('중식(V)');

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
  });
});
