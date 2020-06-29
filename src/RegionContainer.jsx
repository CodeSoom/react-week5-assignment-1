import React from 'react';

export default function RegionContainer() {
  const regions = ['서울', '대전', '대구'];
  return (
    <>
      <div>
        {regions.map((region) => (
          <button type="button" key={region}>
            {region}
          </button>
        ))}
      </div>
    </>
  );
}
