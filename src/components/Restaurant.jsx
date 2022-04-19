export default function Restaurant({ restaurant }) {
  const { name, category, address } = restaurant;
  return (
    <li>
      {`${name} | ${category} | ${address}`}
    </li>
  );
}
