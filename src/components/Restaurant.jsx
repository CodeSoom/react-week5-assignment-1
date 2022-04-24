export default function Restaurant({ restaurant }) {
  const { name } = restaurant;

  return (
    <li>
      {name}
    </li>
  );
}
