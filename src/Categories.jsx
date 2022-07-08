import { useSelector } from 'react-redux';

export default function Categories() {
  const { categories } = useSelector((state) => state);

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button" key={id}>{name}</button>
        </li>
      ))}
    </ul>
  );
}
