import { nameFunctions } from './helper';

export default function Restaurants() {
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
