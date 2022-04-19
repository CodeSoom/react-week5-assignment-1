export default function Region({ regionList }) {
  const regions = regionList.map((region) => (
    <li key={region.id}>
      <p>
        {region.name}
      </p>
    </li>
  ));
  return (
    <ul>{regions}</ul>
  );
}
