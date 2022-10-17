import { fireEvent, render } from '@testing-library/react';

import categories from '../fixtures/categories';

import Categories from './Categories';

jest.mock('react-redux');

describe('Categories', () => {
  const handleClick = jest.fn();

  it('Shows region', () => {
    const { queryByText } = render((
      <Categories
        categories={categories}
        handleClick={handleClick}
      />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });

  it('Changes text', () => {
    const { getByText } = render((
      <Categories
        categories={categories}
        handleClick={handleClick}
      />
    ));

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
  });
});
