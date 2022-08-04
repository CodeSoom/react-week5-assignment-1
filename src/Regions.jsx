import RegionButton from './RegionButton';

export default function Regions({ selectedRegionName, regions, onClick }) {
  return (
    <div>
      <ul>
        {regions.map(((region) => {
          const { id, name } = region;
          return (
            <RegionButton
              key={id}
              name={name}
              selectedRegionName={selectedRegionName}
              onClick={onClick}
            />
          );
        }
        ))}
      </ul>
    </div>
  );
}
