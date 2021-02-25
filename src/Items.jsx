import React from 'react';

export default function Items({ region, category, onClick }) {
  return (
    <ul>
      {region.map((item, index) => (
        <li key={index}>
          <input type="button" value={item} onClick={onClick} />
        </li>
      ))}
      <br />
      {category.map((item, index) => (
        <li key={index}>
          <input type="button" value={item} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
