export default function Button({ onClick, data }) {
  const { name, active } = data;

  return (
    <button type="button" onClick={onClick}>
      {name}
      {active && '(V)'}
    </button>
  );
}
