import Region from './Region';

const Regions = ({ regions, onClick }) => (
  <ul>
    {regions.map((region) => (
      <Region
        key={region.id}
        region={region}
        onClick={onClick}
      />
    ))}
  </ul>
);

export default Regions;
