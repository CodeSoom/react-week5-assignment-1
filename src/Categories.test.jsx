import { render } from '@testing-library/react';

import Categories from './Categories';

import { CATEGORIES } from './fixture';

describe('Categories', () => {
  it('render', () => {
    const { container } = render(<Categories categories={CATEGORIES} />);

    expect(container).toHaveTextContent('한식');
  });
});
