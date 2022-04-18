const addressNameFunctions = {
  [true]: (name) => `${name} (V)`,
  [false]: (name) => name,
};

export default function Addresses({ addresses, onSelect, selectAddressId }) {
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
          {addressNameFunctions[address.id === selectAddressId](address.name)}

        </button>
      ))}
    </ul>
  );
}
