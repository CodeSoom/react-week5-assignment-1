import Button from './Button'

export default function Lists({ items, onClick }) {
  if ( items !== undefined && onClick !== undefined ) {
    return (
      <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Button id={item.id} onClick={onClick}>
            {item.name}
          </Button>
        </li>
      ))}
      </ul>
    );
  }

  return (
    <ul>
    { items !== undefined ? items.map((item) => (
      <li key={item.id}>
        {item.name}
      </li>
    )) : <li>Api 정보가 없습니다.</li> }
    </ul>
  );
}
