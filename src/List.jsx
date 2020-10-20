import React from 'react';

export default function List({ itemList }) {

  return (
    <ul>
      {
        itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  )
}