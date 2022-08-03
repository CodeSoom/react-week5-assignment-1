import AddressButton from './AddressButton';

export default function Addresses({ addresses }) {
  function onClick() {
    //
  }

  return (
    <div>
      <ul>
        {addresses.map(((address) => {
          const { id, name, selected } = address;
          return (
            <AddressButton
              key={id}
              name={name}
              selected={selected}
              onClick={onClick}
            />
          );
        }
        ))}
      </ul>
    </div>
  );
}
