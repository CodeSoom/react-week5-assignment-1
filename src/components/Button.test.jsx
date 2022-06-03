import { render } from '@testing-library/react';

import Button from './Button';

test('Button', () => {
  const item = {
    id: 1,
    name: '한식',
  };

  const { getByText } = render(<Button selected name={item.name} />);

  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/V/)).not.toBeNull();
});
