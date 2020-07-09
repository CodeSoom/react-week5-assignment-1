import React from 'react';

export default function AddButton({ handleClickButton }) {
  return (
    <button type="button" onClick={handleClickButton}>등록</button>
  );
}
