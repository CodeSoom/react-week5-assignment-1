import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('render', () => {
    const name = 'Click';
    const handleClick = jest.fn();
    const selected = true;

    const { container, getByText } = render((
      <Button
        name={name}
        onClick={handleClick}
        selected={selected}
      />
    ));

    expect(container).toHaveTextContent(/Click/);
    expect(container).toHaveTextContent('(V)');

    fireEvent.click(getByText(/Click/));
    expect(handleClick).toBeCalled();
  });
});
