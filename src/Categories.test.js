import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  it('renders', () => {
    const categories = [
      { id: 1, name: '한식' },
    ];

    const clickedCategory = { id: '', name: '' };

    const { container } = render((
      <Categories
        categories={categories}
        clickedCategory={clickedCategory}
      />
    ));

    expect(container).toHaveTextContent('한식');
  });

  it('check the clicked category', () => {
    const handleClick = jest.fn();

    const categories = [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
    ];

    const clickedCategory = { id: 2, name: '중식' };

    const { container, getByText } = render((
      <Categories
        categories={categories}
        onClick={handleClick}
        clickedCategory={clickedCategory}
      />
    ));

    expect(container).toHaveTextContent('중식(V)');

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
  });
});
