import RegionButton from './RegionButton';

export default function Regions({ regions, onClick }) {
  return (
    <div>
      <ul>
        {regions.map(((region) => {
          const { id, name, selected } = region;
          return (
            <RegionButton
              key={id}
              name={name}
              selected={selected}
              onClick={onClick}
            />
          );
        }
        ))}
      </ul>
    </div>
  );
}
