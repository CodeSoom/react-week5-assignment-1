import { fireEvent, render } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  const name = '부산';

  const handleClick = jest.fn();

  function renderButton(selected = '서울') {
    return render(
      <Button
        name={name}
        onClick={handleClick}
        selected={selected}
      />,
    );
  }

  it('listens click event', () => {
    const { getByRole } = renderButton();

    fireEvent.click(getByRole('button', { name }));

    expect(handleClick).toBeCalledWith({
      value: name,
    });
  });

  context('when not selected', () => {
    it('renders button without (V)', () => {
      const { getByRole } = renderButton();

      expect(getByRole('button', { name })).toBeInTheDocument();
    });
  });

  context('when selected', () => {
    it('renders button with (V)', () => {
      const { getByRole } = renderButton('부산');

      expect(getByRole('button', { name: `${name}(V)` })).toBeInTheDocument();
    });
  });
});
