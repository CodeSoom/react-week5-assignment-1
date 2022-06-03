import { render } from '@testing-library/react';

import Categories from './Categories';

test('Categories', () => {
  const { getByText } = render(<Categories />);

  expect(getByText('한식')).toBeInTheDocument();
});
