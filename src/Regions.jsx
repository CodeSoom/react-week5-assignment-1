import SelectorButton from './SelectorButton';

export default function Regions({ selectedRegionName, regions, onClick }) {
  return (
    <div>
      <ul>
        {regions.map(((region) => {
          const { id, name } = region;
          return (
            <SelectorButton
              key={id}
              name={name}
              selectedName={selectedRegionName}
              onClick={onClick}
            />
          );
        }
        ))}
      </ul>
    </div>
  );
}
