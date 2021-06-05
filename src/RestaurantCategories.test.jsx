import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RestaurantCategories from './RestaurantCategories';

describe('RestaurantCategories', () => {
  const categories = [
    { id: 1, name: '한식' },
  ];

  const handleClickCategory = jest.fn();

  it('render', () => {
    const { getByText } = render((
      <RestaurantCategories
        categories={categories}
        onClickCategory={handleClickCategory}
      />
    ));

    expect(getByText('한식')).not.toBeNull();

    fireEvent.click(getByText('한식'));

    expect(handleClickCategory).toBeCalled();
  });
});
