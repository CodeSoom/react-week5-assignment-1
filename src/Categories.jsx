import Item from './Item';

export default function Categories({ categories }) {
  if (!categories.length) {
    return null;
  }

  return (
    <>
      {categories.map((category) => (
        <Item
          key={category.id}
          value={category}
        />
      ))}
    </>
  );
}
