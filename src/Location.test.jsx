import { render } from '@testing-library/react';

import Location from './Location';

test('Location', () => {
  const locations = [
    {
      id: 1,
      name: '포항',
    },

  ];

  const { queryByText } = render(
    <Location locations={locations} />,
  );
  expect(queryByText('포항')).not.toBeNull();
});
