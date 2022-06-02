import Item from './Item';

export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {categories.map((category) => (
        <Item key={category.id} item={category} onClick={onClick} />
      ))}
    </ul>
  );
}
