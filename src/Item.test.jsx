import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const handleClick = jest.fn();

  const renderItem = () => render((
    <Item onClick={handleClick}>
      안녕하세요
    </Item>
  ));

  it('renders item', () => {
    const { container } = renderItem();

    expect(container).toHaveTextContent('안녕하세요');
  });

  it('listens click event', () => {
    const { getByText } = renderItem();

    fireEvent.click(getByText('안녕하세요'));

    expect(handleClick).toBeCalled();
  });
});
