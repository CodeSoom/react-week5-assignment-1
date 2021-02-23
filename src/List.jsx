import React from 'react';

function List({ list }) {
  return (
    <ul>
      {list.map((data, index) => (
        <li key={`${index + 1}-${data}`}>
          <button type="button">
            {data}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
