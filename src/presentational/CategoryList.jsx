import Item from './Item';

export default function CategoryList({ categories, onClick, selectedCategory }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <Item
          key={id}
          onClick={() => onClick({
            field: 'selectedCategory',
            value: { id, name },
          })}
        >
          {id === selectedCategory.id ? `${name}(V)` : name}
        </Item>
      ))}
    </ul>
  );
}
