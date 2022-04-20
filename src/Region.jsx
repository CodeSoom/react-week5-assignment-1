export default function Region({ regionList }) {
  return (
    <ul>
      {regionList.map((region) => (
        <li key={region.id}>
          <p>
            {region.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
