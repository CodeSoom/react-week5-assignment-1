import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  const categories = [
    { id: 1, name: '한식' },
  ];

  const renderCategories = () => render(
    <Categories
      categories={categories}
      onClick={handleClick}
    />,
  );
  it('show all categories', () => {
    const { queryByText } = renderCategories();

    expect(queryByText('한식')).not.toBeNull();
  });

  context('click category', () => {
    it('calls handleClick function', () => {
      const { getByText } = renderCategories();

      fireEvent.click(getByText('한식'));

      expect(handleClick).toBeCalled();
    });
  });
});
