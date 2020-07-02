import React from 'react';

export default function AddressList({ addressList }) {
  return (
    <ul>
      {addressList.map((address) => (
        <li key={address.id}>
          <button type="button">{address.name}</button>
        </li>
      ))}
    </ul>
  );
}
