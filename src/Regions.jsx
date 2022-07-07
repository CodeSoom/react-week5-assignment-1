import Region from './Region';

const Regions = ({ regions }) => (
  <ul>
    {regions.map((region) => (
      <Region
        key={region.id}
        region={region}
      />
    ))}
  </ul>
);

export default Regions;
