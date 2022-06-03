import EMPTY_MESSAGES from '../../constants/emptyMessages';

export default function Categories({
  categories, errorMessage, selectedId, onClick,
}) {
  if (!categories?.length) {
    return errorMessage ?? EMPTY_MESSAGES.CATEGORY;
  }

  return (
    <div>
      <ul>
        {categories.map(({ id, name }) => (
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
