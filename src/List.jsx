// import List from './List';

export default function List({
  listItems, selected, hasButton, onClick,
}) {
  if (!listItems || listItems.length === 0) {
    return (
      <ul>
        <li>리스트가 없습니다.</li>
      </ul>
    );
  }

  if (hasButton) {
    return (
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => onClick(item)}>
              {item.name}
              {item.name === selected?.name ? '(V)' : ''}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.id}>
          {item.name}
          |
          {item.type}
          |
          {item.address}
        </li>
      ))}
    </ul>
  );
}
