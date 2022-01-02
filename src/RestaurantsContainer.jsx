import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const restaurants = [
    {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      information: '양천주가 in 서울 강남구 123456',
    },
  ];

  return (
    <Restaurants restaurants={restaurants} />
  );
}
