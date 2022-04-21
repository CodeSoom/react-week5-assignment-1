import Item from './Item';

export default function List({ items, selectedItemId, onClick }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          selectedItemId={selectedItemId}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
