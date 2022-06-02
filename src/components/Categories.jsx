import Item from './Item';

export default function Categories({ categories, changeCategoryId, onClick }) {
  return (
    <div>
      {categories.map((category) => (
        <Item
          key={category.id}
          value={category}
          selected={category.name === changeCategoryId?.name}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
