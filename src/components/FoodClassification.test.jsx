import React from 'react';
import { render, screen } from '@testing-library/react';

import FoodClassification from './FoodClassification';
import foodClassifications from '../../fixtures/foodClassifications';

test('FoodClassification', () => {
  render(<FoodClassification foodClassifications={foodClassifications} />);

  expect(screen.getByText('한식')).toBeInTheDocument();
});
