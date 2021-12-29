import Item from './Item';

export default function Categories({ categories, selectedCategory, onClick }) {
  if (!categories.length) {
    return null;
  }

  return (
    <>
      {categories.map((category) => (
        <Item
          key={category.id}
          value={category}
          selected={category.name === selectedCategory?.name}
          onClick={onClick}
        />
      ))}
    </>
  );
}
