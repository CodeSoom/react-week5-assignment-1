import { render } from '@testing-library/react';

import { regions } from '../../fixtures/regions';

import Buttons from '.';

describe('Buttons', () => {
  it('renders region buttons', () => {
    const { getByRole } = render(<Buttons regions={regions} />);

    regions.forEach(({ name }) => {
      getByRole('button', { name });
    });
  });
});
