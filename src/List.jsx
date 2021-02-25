import React from 'react';

function List({ list, onClick }) {
  if (!list) {
    return <></>;
  }
  return (
    <ul>
      {list.map((data) => (
        <li key={data.id}>
          <button type="button" onClick={() => { onClick(data); }}>
            {data.clicked
              ? `${data.name}(V)`
              : `${data.name}`}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
