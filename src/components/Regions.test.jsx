import { render } from '@testing-library/react';

import regions from '../../fixture/regions';

import Regions from './Regions';

test('Regions', () => {
  const { getByRole, getByText } = render(<Regions regions={regions} />);

  expect(getByRole('list')).toBeInTheDocument();
  expect(getByText('서울')).toBeInTheDocument();
});
