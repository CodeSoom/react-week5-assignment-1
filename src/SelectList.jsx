import { nameFunctions } from './helper';

export default function SelectList({ selectList, onSelect, selectedId }) {
  function handleClick(id) {
    onSelect(id);
  }

  return (
    <ul>
      {selectList.map((listItem) => (
        <li key={listItem.id}>
          <button
            type="button"
            onClick={() => handleClick(listItem.id)}
          >
            {nameFunctions[listItem.id === selectedId](listItem.name)}
          </button>
        </li>
      ))}
    </ul>
  );
}
