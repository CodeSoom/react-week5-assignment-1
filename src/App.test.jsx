import { render } from '@testing-library/react';

import { categories } from '../fixtures/categories';
import { regions } from '../fixtures/regions';

import App from './App';

describe('App', () => {
  it('renders region, category, restaurants', () => {
    const { getByRole } = render(<App />);

    regions.forEach((region) => {
      getByRole('button', { name: region });
    });

    categories.forEach((category) => {
      getByRole('button', { name: category });
    });
  });
});
