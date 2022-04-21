import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  it('Renders Categories Button', () => {
    const categories = [
      { id: 1, name: '일식' },
    ];
    const { queryByText } = render(
      <Categories
        categories={categories}
      />,
    );
    expect(queryByText('일식')).not.toBeNull();
  });
});
