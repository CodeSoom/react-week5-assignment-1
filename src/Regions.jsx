import Button from './Button';

export default function Regions({ regions, selectedRegion }) {
  return (
    <ul>
      {
        regions.map((region) => (
          <Button
            key={region.id}
            item={region}
            selected={selectedRegion}
          />
        ))
      }
    </ul>
  );
}
