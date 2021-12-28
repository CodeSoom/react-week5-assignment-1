import { useSelector } from 'react-redux';

export default function CategoryListContainer() {
  const { categories } = useSelector((state) => ({ categories: state.categories }));

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button">
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
