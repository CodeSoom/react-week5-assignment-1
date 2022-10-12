import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  it('Shows restaruant', () => {
    const restaurants = [
      {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구',
        information: '양천주가 in 서울 강남구',
      },
    ];
    const { queryByText } = render((
      <Restaurant
        restaurants={restaurants}
      />
    ));

    expect(queryByText(/양천주가/)).not.toBeNull();
  });
});
