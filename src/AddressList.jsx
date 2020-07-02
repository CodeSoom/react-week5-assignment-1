import React from 'react';

export default function AddressList({ addressList, onClick, selectedAddress }) {
  return (
    <ul>
      {addressList.map((address) => (
        <li key={address.id}>
          <button type="button" onClick={onClick} id={address.id}>
            {address.name}
            {address.name === selectedAddress ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
