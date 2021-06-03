import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

test('Button', () => {
  const { queryByText } = render(<Button />);
  const button = queryByText('서울');

  fireEvent.click(queryByText('서울'));

  expect(button).not.toBeNull();
});
