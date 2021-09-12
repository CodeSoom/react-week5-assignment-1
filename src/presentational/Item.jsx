export default function Item({
  children, onClick, field, value,
}) {
  const handleClick = () => {
    onClick({ field, value });
  };

  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}
