import React from 'react';

function List({ list, onClick }) {
  if (!list) {
    return <></>;
  }
  return (
    <ul className="list-container">
      {list.map((data) => (
        <li key={data.id}>
          <button type="button" onClick={() => { onClick(data.id); }}>
            {data.clicked
              ? `${data.name}(v)`
              : `${data.name}`}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
