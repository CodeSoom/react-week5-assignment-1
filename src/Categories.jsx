import Button from './Button';

export default function Categories({ categories, selectedCategory }) {
  return (
    <ul>
      {
        categories.map((category) => (
          <Button
            key={category.id}
            item={category}
            selected={selectedCategory}
          />
        ))
      }
    </ul>
  );
}
