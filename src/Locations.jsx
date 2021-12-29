export default function Locations({ location, locations, onClick }) {
  return (
    <ul>
      {locations.map(({ id, name }) => {
        const stateLoaction = location;
        return (
          <li key={id}>
            <button
              type="button"
              onClick={() => onClick(name)}
            >
              {name}
              {stateLoaction === name ? '(V)' : ''}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
