import Item from './Item';

export default function Categories({ categories, selectedCategory, onClick }) {
  if (!categories.length) {
    return null;
  }

  return (
    <>
      {categories.map(({ id, name }) => (
        <Item
          key={id}
          name={name}
          selected={name === selectedCategory}
          onClick={onClick}
        />
      ))}
    </>
  );
}
