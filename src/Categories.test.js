import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  it('renders', () => {
    const categories = [
      { id: 1, name: '한식' },
    ];

    const { container } = render(<Categories categories={categories} />);

    expect(container).toHaveTextContent('한식');
  });

  it('check the clicked category', () => {
    const handleClick = jest.fn();

    const categories = [
      { id: 1, name: '한식' },
    ];

    const { getByText } = render(<Categories categories={categories} onClick={handleClick} />);

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
  });
});
