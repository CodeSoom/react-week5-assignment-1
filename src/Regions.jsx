export default function Regions({ state, onClick }) {
  return (
    <>
      {state.regions.map((region) => (
        <li key={region.id}>
          <button type="button" value={region.id} onClick={() => onClick(region.id)}>
            {region.name}
            {region.id === state.currentRegionId && '(V)'}
          </button>
        </li>
      ))}
    </>
  );
}
