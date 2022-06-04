import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const handleClick = jest.fn();

  const item = {
    id: 1,
    name: '한식',
  };

  context('with selected props', () => {
    it('shows name and V text', () => {
      const { getByText } = render(<Button selected name={item.name} />);

      expect(getByText(/V/)).not.toBeNull();

      expect(getByText(/한식/)).not.toBeNull();
    });

    it('button clicked', () => {
      const { getByText } = render(<Button selected name={item.name} onClick={handleClick} />);

      expect(handleClick).not.toBeCalled();

      fireEvent.click(getByText(/한식/));

      expect(handleClick).toBeCalled();
    });
  });

  context('without selected props', () => {
    it("doesn'tshows V text", () => {
      const { queryByText } = render(<Button selected={false} name={item.name} />);

      expect(queryByText(/V/)).toBeNull();
    });
  });
});
