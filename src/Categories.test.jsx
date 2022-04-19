import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  it('renders categories', () => {
    const categories = [
      { id: 1, name: '한식' },
    ];

    const { queryByText } = render((
      <Categories categories={categories} />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });
});
