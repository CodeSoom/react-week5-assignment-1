import React from 'react';

import Item from './Item';

function List({ list }) {
  return (
    <ul>
      {[
        { id: 1, name: '서울' },
        { id: 7, name: '인천' },
        { id: 3, name: '대구' },
        { id: 4, name: '부산' },
        { id: 8, name: '울산' },
        { id: 5, name: '광주' },
      ].map((data) => (
        <li key={data.id}>
          <Item text={data.name} />
        </li>
      ))}

    </ul>
  );
}

export default List;
