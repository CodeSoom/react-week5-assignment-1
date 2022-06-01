import Item from './Item';

export default function Categories({ categories, changeCategoryId, onClick }) {
  return (
    <>
      {categories.map((category) => (
        <Item
          key={category.id}
          value={category}
          selected={category.name === changeCategoryId?.name}
          onClick={onClick}
        />
      ))}
    </>
  );
}
