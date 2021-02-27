import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const categories = [
    { id: 1, name: '한식' },
  ];

  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderCategory(name) {
    return render((
      <Categories
        categories={categories}
        selectedCategory={name}
        onClick={handleClick}
      />

    ));
  }

  it('renders category buttons', () => {
    const { queryByText } = renderCategory();

    expect(queryByText('한식')).not.toBeNull();
  });

  it('listens lick event', () => {
    const { queryByText } = renderCategory();

    fireEvent.click(queryByText('한식'));

    expect(handleClick).toBeCalled();
  });

  it('renders selected button with "V" ', () => {
    const { queryByText } = renderCategory('한식');

    expect(queryByText('한식(V)')).not.toBeNull();
  });
});
