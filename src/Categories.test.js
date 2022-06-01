import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  it('renders', () => {
    const categories = [
      { id: 1, name: '한식' },
    ];

    const { container } = render(<Categories categories={categories} />);

    expect(container).toHaveTextContent('한식');
  });
});
