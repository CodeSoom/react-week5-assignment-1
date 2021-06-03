import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

test('Button', () => {
  const item = { id: 1, name: '서울' };

  const { queryByText } = render(<Button item={item} />);
  const button = queryByText('서울');

  fireEvent.click(queryByText('서울'));

  expect(button).not.toBeNull();
});
