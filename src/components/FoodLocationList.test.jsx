import React from 'react';
import { render, screen } from '@testing-library/react';

import FoodLocationList from './FoodLocationList';
import locales from '../../fixtures/locales';
import foodClassifications from '../../fixtures/foodClassifications';

describe('List', () => {
  context('with locales', () => {
    it('see "서울"', () => {
      render(<FoodLocationList items={locales} />);

      expect(screen.getByText('서울')).toBeInTheDocument();
    });
  });

  context('with foodClassifications', () => {
    it('see "한식"', () => {
      render(<FoodLocationList items={foodClassifications} />);

      expect(screen.getByText('한식')).toBeInTheDocument();
    });
  });
});
