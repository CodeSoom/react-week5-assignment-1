import Regions from './Regions';

import { regions } from '../fixtures/staticData';

export default function App() {
  return (
    <>
      <Regions regions={regions} />
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
