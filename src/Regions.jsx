import React from 'react';

const resgions = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

export default function Resgions() {
  return (
    <>
      <ul>
        {resgions.map((resgion) => (
          <li key={resgion}>
            {resgion}
          </li>
        ))}
      </ul>
    </>
  );
}
