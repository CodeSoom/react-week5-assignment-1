export default function Regions({ regions, region, handleClick }) {
  return (
    <ul>
      {
        regions.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => {
                handleClick(id);
              }}
              value={id}
            >
              {name}
              {region && region.id === id ? '(V)' : ''}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
