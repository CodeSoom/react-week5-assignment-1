export default function Addresses({ addresses, onSelect }) {
  function handleClick(id) {
    onSelect(id);
  }

  return (
    <ul>
      {addresses.map((address) => (
        <button
          key={address.id}
          type="button"
          onClick={() => handleClick(address.id)}
        >
          {address.name}
        </button>
      ))}
    </ul>
  );
}
