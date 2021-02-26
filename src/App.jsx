import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

// import regions from '../fixtures/regions'

import {
  chooseRegions,
  loadRegions,
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
    // dispatch(chooseRegions(regions))
  }, []);

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
