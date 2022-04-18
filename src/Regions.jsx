import { nameFunctions } from './helper';

export default function Regions({ regions, onSelect, selectRegionId }) {
  function handleClick(id) {
    onSelect(id);
  }

  return (
    <ul>
      {regions.map((address) => (
        <button
          key={address.id}
          name="region"
          type="button"
          onClick={() => handleClick(address.id)}
        >
          {nameFunctions[address.id === selectRegionId](address.name)}

        </button>
      ))}
    </ul>
  );
}
