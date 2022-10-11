import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import categories from '../fixtures/categories';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  it('shows region', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories,
      restaurants: [],
    }));

    const { queryByText } = render((
      <CategoriesContainer />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });
});
