import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const categories = [
    { id: 1, name: '한식' },
  ];

  it('renders all categories', () => {
    const selectedCatId = 0;
    const handleClick = jest.fn();
    const { getByText } = render((
      <Categories
        categories={categories}
        selectedCatId={selectedCatId}
        onClick={handleClick}
      />
    ));

    expect(getByText('한식')).not.toBeNull();
  });

  context('without selected category', () => {
    it('renders name without (v)', () => {
      const selectedCatId = 0;
      const handleClick = jest.fn();
      const { getByText } = render((
        <Categories
          categories={categories}
          selectedCatId={selectedCatId}
          onClick={handleClick}
        />
      ));

      expect(getByText('한식')).not.toBeNull();
    });
  });

  describe('if category is selected', () => {
    it('append (v) after name', () => {
      const selectedCatId = 1;
      const handleClick = jest.fn();
      const { getByText } = render((
        <Categories
          categories={categories}
          selectedCatId={selectedCatId}
          onClick={handleClick}
        />
      ));

      expect(getByText('한식(v)')).not.toBeNull();
    });
  });

  describe('if category is clicked', () => {
    it('append (v) after category name', () => {
      const handleClick = jest.fn();
      const selectedCatId = 0;
      const { getByText } = render((
        <Categories
          categories={categories}
          selectedCatId={selectedCatId}
          onClick={handleClick}
        />
      ));

      expect(getByText('한식')).not.toBeNull();
      fireEvent.click(getByText('한식'));
      expect(handleClick).toBeCalled();
    });
  });
});
