import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('render', () => {
    const name = 'Click';
    const handleClick = jest.fn();

    const { container, getByText } = render(<Button name={name} onClick={handleClick} />);

    expect(container).toHaveTextContent('Click');

    fireEvent.click(getByText('Click'));
    expect(handleClick).toBeCalled();
  });
});
