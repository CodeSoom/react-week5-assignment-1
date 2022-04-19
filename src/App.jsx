import Location from './Location';

export default function App() {
  const locations = [
    {
      id: 1,
      name: '서울',
    },
    {
      id: 2,
      name: '대전',
    },
  ];
  return (
    <div>
      <Location locations={locations} />
      <p>한식</p>
      <p>중식</p>
    </div>
  );
}
