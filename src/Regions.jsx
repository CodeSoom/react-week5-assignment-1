import Button from './Button';

export default function Regions({ regions, selectedRegion, onClick }) {
  return (
    <ul>
      {
        regions.map((region) => (
          <li key={region.id}>
            <Button
              onClick={() => onClick(region)}
              name={`${region.name}${selectedRegion.id === region.id ? '(V)' : ''}`}
            />
          </li>
        ))
      }
    </ul>
  );
}
