export default function Button({ active, children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
      {active && '(V)'}
    </button>
  );
}
