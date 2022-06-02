export default function Regions({ regions }) {
  return (
    <ul>
      {regions.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
}
