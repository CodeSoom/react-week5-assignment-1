import Button from './Button';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      {regions.map((region) => (
        <Button key={region.id} name={region.name} onClick={onClick} />
      ))}
    </ul>
  );
}
