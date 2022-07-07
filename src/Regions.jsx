export default function Regions({ regions, onClickSelectRegion }) {
  return (
    <ul>
      {regions.map((i) => (
        <li key={i.id}>
          <button onClick={onClickSelectRegion} type="button" key={i.id}>{i.name}</button>
        </li>
      ))}
    </ul>
  );
}
