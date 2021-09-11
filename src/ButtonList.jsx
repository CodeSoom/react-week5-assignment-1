import Button from './Button';

export default function List({
  type, items, chosenItem, handleClick,
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <Button
            label={item.name}
            isChosen={item.id === chosenItem.id}
            onClick={handleClick(type, item)}
          />
        </li>
      ))}
    </ul>
  );
}
