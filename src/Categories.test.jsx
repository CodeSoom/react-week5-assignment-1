import { render } from '@testing-library/react';

import Categories from './Categories';

test('Categories', () => {
  const categories = [
    {
      id: 1,
      name: '한식',
    },
  ];
  const { getByText } = render(<Categories categories={categories} />);

  expect(getByText('한식')).not.toBeNull();
});
