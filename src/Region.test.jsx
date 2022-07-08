import { render } from '@testing-library/react';

import Region from './Region';

test('Region', () => {
  const region = [
    {
      id: 1,
      name: '서울',
    },
  ];
  const { getByText } = render(<Region region={region} />);

  expect(getByText('서울')).not.toBeNull();
});
