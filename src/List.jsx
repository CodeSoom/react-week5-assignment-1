import React from 'react';

import Item from './Item';

function List({ list }) {
  if (!list) {
    return <></>;
  }
  return (
    <ul className="list-container">
      {list.map((data) => (
        <li key={data.id}>
          <Item text={data.name} />
        </li>
      ))}
    </ul>
  );
}

export default List;
