import { fireEvent, render } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  const name = '부산';
  const search = 'search';

  const handleClick = jest.fn();

  it('listens click event', () => {
    const { getByRole } = render(
      <Button
        name={name}
        onClick={handleClick}
        search={search}
      />,
    );

    fireEvent.click(getByRole('button', { name }));

    expect(handleClick).toBeCalledWith({
      search,
      value: name,
    });
  });

  context('when selected', () => {
    it('renders button with (V)', () => {
      const { getByRole } = render(<Button name={name} search={search} selected={name} />);

      expect(getByRole('button', { name: `${name}(V)` })).toBeInTheDocument();
    });
  });

  context('when not selected', () => {
    it('renders button without (V)', () => {
      const { getByRole } = render(<Button name={name} search={search} selected="서울" />);

      expect(getByRole('button', { name })).toBeInTheDocument();
    });
  });
});
