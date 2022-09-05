import Button from './Button';

export default function Categories({ categories, selectedCategory, onCategoryClick }) {
  return (
    <ul>
      {
        categories.map((category) => (
          <Button
            key={category.id}
            item={category}
            selected={selectedCategory}
            onClick={() => onCategoryClick(category)}
          />
        ))
      }
    </ul>
  );
}
