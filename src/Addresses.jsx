export default function Addresses({ addresses }) {
  return (
    <div>
      <ul>
        {addresses.map(((address) => (
          <li key={address.id}>{address.name}</li>
        )))}
      </ul>
    </div>
  );
}
