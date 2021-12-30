export default function Buttons({ stateValue, valueList, onClick }) {
  return (
    <ul>
      {valueList.map((value) => (
        <li key={value.id}>
          <button
            type="button"
            onClick={() => onClick(value)}
          >
            {value.name}
            {stateValue.name === value.name ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
