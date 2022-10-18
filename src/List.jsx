export default function List({ stores }) {
  return (
    <ul>
      {stores.map((store) => (<li key={store.id}>{store.name}</li>))}
    </ul>
  );
}
