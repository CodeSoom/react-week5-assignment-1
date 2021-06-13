import { render } from '@testing-library/react';

import Region from './Region';

import regions from '../fixtures/regions';

test('Region', () => {
  const { getByText, getAllByRole } = render(<Region regions={regions} />);

  expect(getAllByRole('listitem')).toHaveLength(regions.length);
  expect(getByText(regions[regions.length - 1].name)).not.toBeNull();
});
