import { useSelector } from 'react-redux';

export default function Categories() {
  const { categories } = useSelector((state) => state);

  return (
    <ul>
      {categories.map((i) => (
        <li key={i.id}>
          <button type="button" key={i.id}>{i.name}</button>
        </li>
      ))}
    </ul>
  );
}
