import { useEffect, useState } from 'react';

export default function RegionsContainer() {
  const [regions, setRegions] = useState({
    categoreis: [],
  });

  useEffect(() => {
    setRegions([
      { id: 1, name: '서울' },
    ]);
  }, []);

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
