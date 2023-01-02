const Regions = ({ regions }) => (
  <ul>
    {regions.map((region) => (
      <li key={region.id}>
        {region.region}
      </li>
    ))}
  </ul>
);
export default Regions;
