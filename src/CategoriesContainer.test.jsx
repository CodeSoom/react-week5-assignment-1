import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('renders categories', () => {
    const { queryByText } = render((
      <CategoriesContainer />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });
});
