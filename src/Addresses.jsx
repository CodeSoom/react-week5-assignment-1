import { nameFunctions } from './helper';

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
          {nameFunctions[address.id === selectAddressId](address.name)}

        </button>
      ))}
    </ul>
  );
}
