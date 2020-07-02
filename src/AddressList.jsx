import React from 'react';

export default function AddressList({ addressList, onClick }) {
  return (
    <ul>
      {addressList.map((address) => (
        <li key={address.id}>
          <button type="button" onClick={onClick}>{address.name}</button>
        </li>
      ))}
    </ul>
  );
}
