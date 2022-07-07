export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map((i) => (
        <li key={i.id}>
          <button type="button" key={i.id}>{i.name}</button>
        </li>
      ))}
    </ul>
  );
}
