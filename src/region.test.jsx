import { render } from '@testing-library/react';

import Region from './Region';

test('Location', () => {
  const locations = [
    {
      id: 1,
      name: '포항',
    },
  ];

  const { queryByText } = render(
    <Region locations={locations} />,
  );
  expect(queryByText('포항')).not.toBeNull();
});
