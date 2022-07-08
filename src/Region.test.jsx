import { render } from '@testing-library/react';

import Region from './Region';

test('Region', () => {
  const regions = [
    {
      id: 1,
      name: '서울',
    },
    {
      id: 2,
      name: '광주',
    },
  ];
  const { getByText } = render(<Region regions={regions} />);

  expect(getByText('서울')).not.toBeNull();
});
