import { render } from '@testing-library/react';

import Region from './Region';

test('Location', () => {
  const regionList = [
    {
      id: 1,
      name: '포항',
    },
  ];

  const { queryByText } = render(
    <Region regionList={regionList} />,
  );
  expect(queryByText('포항')).not.toBeNull();
});
