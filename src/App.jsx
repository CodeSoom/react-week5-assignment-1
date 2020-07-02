import React from 'react';
import AddressList from './AddressList';

export default function App() {
  return (
    <div>
      {/* Address List */}
      <AddressList />

      {/* Category List */}
      <ul>
        <li>
          <button type="button">한식</button>
        </li>
      </ul>
    </div>
  );
}
