import Locations from './Locations';

export default function LocationsContainer() {
  const locations = [
    {
      id: 1, name: '서울',
    },
  ];

  return (
    <>
      <Locations locations={locations} />
    </>
  );
}
