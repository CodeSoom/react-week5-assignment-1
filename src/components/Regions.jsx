import Button from './Button';

export default function Regions({ regions, onClick, restaurant }) {
  return (
    <ul>
      {regions.map((region) => (
        <Button
          key={region.id}
          name={region.name}
          onClick={onClick}
          buttonName="region"
          value={region.name}
          selected={restaurant.region === region.name}
        />
      ))}
    </ul>
  );
}
