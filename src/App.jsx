import Addresses from './Addresses';

import { addresses } from '../fixtures/staticData';

export default function App() {
  return (
    <>
      <Addresses addresses={addresses} />
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
