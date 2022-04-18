export default function Addresses({ addresses }) {
  function handleClick(id) {
    // TODO
    // onSelect(id);
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
