import React from 'react';

export default function Items({ region, category }) {
  return (
    <ul>
      {region.map((item, index) => (
        <li key={index}>
          <input type="button" value={item} />
        </li>
      ))}
      <br />
      {category.map((item, index) => (
        <li key={index}>
          <input type="button" value={item} />
        </li>
      ))}
    </ul>
  );
}
