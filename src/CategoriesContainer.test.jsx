import { render } from '@testing-library/react';

import categories from '../fixtures/region';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('shows region', () => {
    const { queryByText } = render((
      <CategoriesContainer
        categories={categories}
      />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });
});
