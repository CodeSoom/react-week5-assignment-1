import { render } from '@testing-library/react';

import { regions } from '../../fixtures/regions';

import Buttons from '.';

describe('Buttons', () => {
  it('renders buttons', () => {
    const { getByRole } = render(<Buttons options={regions} />);

    regions.forEach(({ name }) => {
      getByRole('button', { name });
    });
  });
});
