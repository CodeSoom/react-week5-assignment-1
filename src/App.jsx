import { addresses } from '../fixtures/staticData';

export default function App() {
  return (
    <>
      <div>
        <ul>
          {addresses.map(((address) => (
            <li key={address.id}>{address.name}</li>
          )))}
        </ul>
      </div>
      <div>
        <ul>
          <li>한식</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>양천주가</li>
        </ul>
      </div>
    </>
  );
}
