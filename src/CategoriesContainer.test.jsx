import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('renders categories', () => {
    const { container } = render((
      <CategoriesContainer />
    ));

    expect(container).toHaveTextContent('한식');
  });
});
