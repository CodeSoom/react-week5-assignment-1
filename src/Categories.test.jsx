import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const categories = [
    { id: 1, name: '한식' },
  ];

  it('renders categories', () => {
    const { container } = render((
      <Categories categories={categories} />
    ));

    expect(container).toHaveTextContent('한식');
  });

  it('listens for click event on select category', () => {
    const onSelect = jest.fn();

    const { getByText } = render((
      <Categories
        categories={categories}
        onSelect={onSelect}
      />
    ));

    fireEvent.click(getByText('한식'));

    expect(onSelect).toBeCalled();
  });
});
