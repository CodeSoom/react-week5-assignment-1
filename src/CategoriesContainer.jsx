import { useSelector } from 'react-redux';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
