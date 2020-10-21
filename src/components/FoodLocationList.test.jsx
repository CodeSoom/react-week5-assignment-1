import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import FoodLocationList from './FoodLocationList';
import locales from '../../fixtures/locales';
import foodCategories from '../../fixtures/foodCategories';

describe('List', () => {
  const handleClick = jest.fn();
  const renderFoodLocationList = ({ items }) => render(
    <FoodLocationList
      items={items}
      onClick={handleClick}
    />,
  );

  context('with locales', () => {
    it('see "서울"', () => {
      renderFoodLocationList({ items: locales });

      expect(screen.getByText('서울')).toBeInTheDocument();
    });
  });

  context('with foodCategories', () => {
    it('see "한식"', () => {
      renderFoodLocationList({ items: foodCategories });

      expect(screen.getByText('한식')).toBeInTheDocument();
    });
  });

  it('click test', () => {
    renderFoodLocationList({ items: locales });

    expect(handleClick).not.toBeCalled();

    fireEvent.click(screen.getByRole('button', { name: '서울' }));

    expect(handleClick).toBeCalled();
  });
});
