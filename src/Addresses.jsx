export default function Addresses({ addresses }) {
  function addressRender(address) {
    return (
      <li key={address.id}>
        {address.name}
        {address.selected && '(V)'}
      </li>
    );
  }

  return (
    <div>
      <ul>
        {addresses.map(((address) => (
          addressRender(address)
        )))}
      </ul>
    </div>
  );
}
