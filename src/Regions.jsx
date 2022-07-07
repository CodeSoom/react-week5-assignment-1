export default function Regions({ region, regions, onClickSelectRegion }) {
  return (
    <ul>
      {regions.map((i) => (
        <li key={i.id}>
          <button onClick={onClickSelectRegion} name={i.name} type="button" key={i.id}>
            {i.name}
            {i.name === region && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
