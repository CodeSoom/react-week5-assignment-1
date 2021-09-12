export default function Button({ label, isChosen, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {`${label}${isChosen ? '(V)' : ''}`}
    </button>
  );
}
