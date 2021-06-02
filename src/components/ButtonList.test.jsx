import { render } from '@testing-library/react';

import ButtonList from './ButtonList';

describe('buttonList', () => {
  it('renders buttons', () => {
    const names = [1, 2, 3, 4];
    const handleClick = jest.fn();

    const { getAllByRole } = render(
      <ButtonList
        names={names}
        onClick={handleClick}
      />,
    );

    expect(getAllByRole('button')).toHaveLength(names.length);
  });
});
