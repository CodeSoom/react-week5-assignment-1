import Button from './Button';

export default function Regions({ regions, selectedRegion, onClick }) {
  return (
    <ul>
      {
        regions.map((region) => (
          <li key={region.id}>
            <Button
              onClick={() => onClick(region)}
              name={region.name}
              selected={selectedRegion.id === region.id}
            />
          </li>
        ))
      }
    </ul>
  );
}
