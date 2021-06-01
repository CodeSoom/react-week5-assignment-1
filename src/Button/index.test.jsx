import { fireEvent, render } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  const handleClick = jest.fn();

  it('renders button', () => {
    const { getByRole } = render(
      <Button
        content="부산"
        onClick={handleClick}
      />,
    );

    expect(getByRole('button', { name: '부산' })).toBeInTheDocument();
  });

  it('listens click event', () => {
    const { getByRole } = render(
      <Button
        content="부산"
        onClick={handleClick}
      />,
    );

    fireEvent.click(getByRole('button', { name: '부산' }));

    expect(handleClick).toBeCalledWith('부산');
  });
});
