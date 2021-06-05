import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('renders button', () => {
    const item = { id: 1, name: '서울' };

    const handleClick = jest.fn();

    const { queryByText } = render(
      <Button
        item={item}
        onclick={handleClick}
      />,
    );
    const button = queryByText('서울');

    fireEvent.click(queryByText('서울'));

    expect(button).not.toBeNull();
  });

  it('clicks button and changes button name', () => {
    const selectedItem = { id: 1, name: '서울' };

    const handleClick = jest.fn();

    const { queryByText } = render(
      <Button
        item={selectedItem}
        onclick={handleClick}
      />,
    );

    fireEvent.click(queryByText('서울'));

    expect(handleClick).toBeCalledWith({ id: 1, name: '서울' });
    expect(queryByText('서울(V)')).not.toBeNull();
  });
});
