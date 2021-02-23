import React from 'react';

import Item from './Item';

function List({ list }) {
  return (
    <ul>
      {list.map((data, index) => (
        <li key={`${index + 1}-${data}`}>
          <Item text={data} />
        </li>
      ))}
    </ul>
  );
}

export default List;
