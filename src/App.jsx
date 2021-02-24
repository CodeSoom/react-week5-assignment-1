import React from 'react';

import RegionsContainer from './RegionsContainer';

export default function App() {
  return (
    <div>
      <RegionsContainer />
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
