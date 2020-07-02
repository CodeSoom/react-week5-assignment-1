import React from 'react';
import AddressList from './AddressList';

export default function App() {
  const addressList = [
    { id: 1, name: '서울' },
  ];

  return (
    <div>
      {/* Address List */}
      <AddressList addressList={addressList} />

      {/* Category List */}
      <ul>
        <li>
          <button type="button">한식</button>
        </li>
      </ul>
    </div>
  );
}
