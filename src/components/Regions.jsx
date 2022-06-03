import EMPTY_MESSAGES from '../../constants/emptyMessages';

export default function Regions({
  regions, selectedId, errorMessage, onClick,
}) {
  if (!regions?.length) {
    return <div>{errorMessage ?? EMPTY_MESSAGES.REGION}</div>;
  }

  return (
    <div>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => onClick(id)}>
              {name}
              {selectedId === id && '(V)'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
