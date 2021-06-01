import { render } from '@testing-library/react';

import Region from './Region';

test('Region', () => {
  const { getByText, getByRole } = render(<Region />);

  expect(getByRole('listitem')).not.toBeNull();
  expect(getByText('서울')).not.toBeNull();
});
