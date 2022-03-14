export default function Button({ children, id, onClick }) {
  return (
    <button type="button" id={id} onClick={onClick}>
      {children}
    </button>
  );
}
