import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const restaurants = [
    {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      information: '양천주가 in 서울 강남구 123456',
    },
  ];

  const { getByText } = render(<Restaurants restaurants={restaurants} />);

  expect(getByText('양천주가')).not.toBeNull();
});
