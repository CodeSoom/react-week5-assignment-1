/* eslint-disable object-curly-newline */
export default function Button({ selected, name, onClick, buttonName, value }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick({ name: buttonName, value })}
      >
        {name}
        {selected && '(V)'}
      </button>
    </li>
  );
}
