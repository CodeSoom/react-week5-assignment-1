export default function Regions({ regions, region, handleClick }) {
  return (
    <ul>
      {regions.length > 0 && regions.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => {
              handleClick(id);
            }}
            value={id}
          >
            {region && region.id === id ? `${name}(V)` : `${name}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
