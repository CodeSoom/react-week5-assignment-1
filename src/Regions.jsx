const Regions = ({ regions }) => (
  <ul>
    {regions.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

export default Regions;
