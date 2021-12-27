import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';
import { CATEGORIES } from './fixtures';

describe('CategoriesContainer', () => {
  it('render', () => {
    const { container } = render(
      <CategoriesContainer categories={CATEGORIES} />
    );

    expect(container).toHaveTextContent('한식');
  });
});
