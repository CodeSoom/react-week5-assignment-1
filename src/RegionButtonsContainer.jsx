import React from 'react';

function RegionButtons() {
  return (
    <li>
      <button type="button">서울</button>
    </li>
  );
}

export default function RegionButtonsContainer() {
  return (
    <ul>
      <RegionButtons />
    </ul>
  );
}
