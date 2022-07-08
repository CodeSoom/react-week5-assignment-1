export default function Regions({ region, regions, onClickSelectRegion }) {
  return (
    <ul>
      {regions.map(({ name, id }) => (
        <li key={id}>
          <button onClick={onClickSelectRegion} name={name} type="button" key={id}>
            {name}
            {name === region && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
