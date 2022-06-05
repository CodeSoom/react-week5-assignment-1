import Button from './Button';

export default function Categories({ categories, selectedCategory, onClick }) {
  return (
    <ul>
      {
        categories.map((category) => (
          <li key={category.id}>
            <Button
              onClick={() => onClick(category)}
              name={category.name}
              selected={category.id === selectedCategory.id}
            />
          </li>
        ))
      }
    </ul>
  );
}
