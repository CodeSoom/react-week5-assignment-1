import Restaurants from './Restaurants';

const restaurants = [
  {
    id: 1,
    name: '모토쿠라시',
    category: '일식',
    place: '서울시 송파구',
  },
];

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <Restaurants
        restaurants={restaurants}
      />
    </div>
  );
}
