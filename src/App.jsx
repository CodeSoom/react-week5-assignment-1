import Locations from './Locations';

export default function App() {
  const locations = [
    {
      id: 1, name: '서울',
    },
  ];

  return (
    <>
      <h1>Restaurants</h1>
      <h2>Location</h2>
      <Locations locations={locations} />
      <h2>Category</h2>
      <ul>
        <li>한식</li>
        <li>분식</li>
      </ul>
    </>
  );
}
