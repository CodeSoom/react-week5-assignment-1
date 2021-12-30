export default function Buttons({ stateValue, valueList, onClick }) {
  return (
    <ul>
      {valueList.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(name)}
          >
            {name}
            {stateValue === name ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
