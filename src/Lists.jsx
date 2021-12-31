import Button from './Button'

export default function Lists({ items, onClick }) {
  return (
    <ul>
    { items !== undefined ? items.map((item) => (
      <li key={item.id}>
        <Button id={item.id} onClick={onClick}>
          {item.name}
        </Button>
      </li>
    )) : ''}
    </ul>
  );
}
