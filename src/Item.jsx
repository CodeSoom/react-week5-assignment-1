export default function Item({ children, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}
