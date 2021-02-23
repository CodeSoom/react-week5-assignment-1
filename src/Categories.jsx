import React from 'react';

export default function Categories({ categories, onClick, selectId }) {
  return (
    <ul>
      {categories.map((categorie) => (
        <li key={categorie.id}>
          <button type="button" onClick={() => onClick(categorie.id)}>
            {categorie.name}
            {selectId === categorie.id && '(V)'}
            {/* 클릭했을때 (V)가 생기는것을 확인해줄 방법을 잘 모르겠습니다... */}
          </button>
        </li>
      ))}
    </ul>
  );
}
