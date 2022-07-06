import { useSelector } from 'react-redux';

export default function Regions() {
  const { regions = [] } = useSelector((state) => state);

  return (
    <ul>
      {regions.map((i) => (
        <li key={i.id}>
          <button type="button" key={i.id}>{i.name}</button>
        </li>
      ))}
    </ul>
  );
}
