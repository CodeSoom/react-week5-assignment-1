import { useSelector } from 'react-redux';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => state);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button">
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
