import React from 'react';

export default function AddressList({ addressList, onClick, selectedAddress }) {
  return (
    <ul>
      {addressList.map((address) => (
        <li key={address.id}>
          <button type="button" onClick={onClick}>
            {address.name}
            {selectedAddress === address.name ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
