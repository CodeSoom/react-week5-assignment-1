import React from 'react';

import AddressListContainer from './AddressListContainer';

export default function App() {
  return (
    <div>
      <AddressListContainer />

      {/* Category List */}
      <ul>
        <li>
          <button type="button">한식</button>
        </li>
      </ul>
    </div>
  );
}
