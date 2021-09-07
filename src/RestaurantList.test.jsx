import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  const renderRegionList = () => render((
    <RestaurantList
      restaurants={[{
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      }, {
        id: 6,
        categoryId: 1,
        name: '한국식초밥',
        address: '서울 강남구',
        information: '한국식 초밥 in 서울 강남구',
      }]}
    />
  ));

  it('renders restaurants', () => {
    const { container } = renderRegionList();

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('한국식초밥');
  });
});
