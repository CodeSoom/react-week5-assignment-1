import { useSelector } from 'react-redux';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => state);

  return (
    <ul>
      {categories.map((category) => (
        <button key={category.id} type="button">
          {category.name}
        </button>
      ))}
    </ul>
  );
}
