import React from 'react';

import RegionsContainer from './RegionsContainer';

export default function App() {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
    { id: 4, name: '부산' },
    { id: 5, name: '광주' },
    { id: 6, name: '강원도' },
    { id: 7, name: '인천' },
  ]

  return (
    <div>
      <RegionsContainer regions={regions} />
      <ul>
        <li><button>한식</button></li>
        <li><button>중식</button></li>
        <li><button>일식</button></li>
        <li><button>양식</button></li>
        <li><button>분식</button></li>
      </ul>
    </div>
  );
}
