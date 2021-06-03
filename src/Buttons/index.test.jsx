import { fireEvent, render } from '@testing-library/react';

import Buttons from '.';

import { categories } from '../../fixtures/categories';

describe('Buttons', () => {
  const handleClickChangeSearch = jest.fn();

  it('renders Buttons', () => {
    const { getByRole } = render(
      <Buttons
        values={categories}
        onClickChangeSearch={handleClickChangeSearch}
      />,
    );

    categories.forEach(({ name }) => {
      expect(getByRole('button', { name })).toBeInTheDocument();
    });
  });

  it('listens click event', () => {
    const { getByRole } = render(
      <Buttons
        values={categories}
        onClickChangeSearch={handleClickChangeSearch}
      />,
    );

    expect(handleClickChangeSearch).not.toBeCalled();

    categories.forEach(({ name }) => {
      fireEvent.click(getByRole('button', { name }));

      expect(handleClickChangeSearch).toBeCalled();
    });
  });
});
