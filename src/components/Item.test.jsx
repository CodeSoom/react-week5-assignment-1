import { render } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const item = {
    id: 1,
    name: '한식',
  };

  const { getByText } = render(<Item selected item={item} />);

  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/V/)).not.toBeNull();
});
