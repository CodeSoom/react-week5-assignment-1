import React from 'react';

export default function Items({ region, category, onClick }) {
  return (
    <ul>
      {region.map((item) => (
        <li key={item}>
          <input type="button" value={item} onClick={() => onClick(item)} />
        </li>
      ))}
      <br />
      {category.map((item) => (
        <li key={item}>
          <input type="button" value={item} onClick={() => onClick(item)} />
        </li>
      ))}
    </ul>
  );
}
