// import List from './List';

export default function List({
  itemTypes, hasButton, onClick,
}) {
  if (itemTypes.length === 0) {
    return (
      <p>리스트가 없어요!</p>
    );
  }

  if (hasButton) {
    return (
      <ul>
        {itemTypes.map((v) => (
          <li key={v.id}><button type="button" onClick={onClick}>{v.name}</button></li>
        ))}
      </ul>
    );
  }

  return (
    <ul>
      {itemTypes.map((v) => (
        <li key={v.id}>{v.name}</li>
      ))}
    </ul>
  );
}
