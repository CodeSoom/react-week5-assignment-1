import { render } from '@testing-library/react';

import { regions } from '../../fixtures/regions';

import Regions from '.';

describe('Regions', () => {
  it('renders region buttons', () => {
    const { getByRole } = render(<Regions regions={regions} />);

    regions.forEach(({ name }) => {
      getByRole('button', { name });
    });
  });
});
