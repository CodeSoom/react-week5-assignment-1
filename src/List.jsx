// import List from './List';

export default function List({
  itemTypes, hasButton, onClick,
}) {
  if (itemTypes && itemTypes.length === 0) {
    return (
      <p>리스트가 없어요!</p>
    );
  }

  if (hasButton) {
    return (
      <ul>
        {itemTypes.map((item) => (
          <li key={item.id}><button type="button" onClick={onClick}>{item.name}</button></li>
        ))}
      </ul>
    );
  }

  return (
    <ul>
      {itemTypes.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
