export default function Regions({ regions, selectedRegion, onClick }) {
  return (
    <ul>
      {
        regions.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => onClick(name)}>
              {name}
              {selectedRegion === name && '(V)'}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
