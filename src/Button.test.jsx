import { render } from '@testing-library/react';

import Button from './Button';

import regions from '../fixtures/regions';

test('Button', () => {
  const { getByText, getByRole } = render(<Button name={regions[1].name} />);

  expect(getByRole('button')).not.toBeNull();
  expect(getByText(regions[1].name)).not.toBeNull();
});
