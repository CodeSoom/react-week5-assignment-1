import Region from './Region';

const Regions = ({ regions, selectedRegion, onClick }) => (
  <ul>
    {regions.map((region) => (
      <Region
        key={region.id}
        region={region}
        selected={region === selectedRegion}
        onClick={onClick}
      />
    ))}
  </ul>
);

export default Regions;
