import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

// import regions from '../fixtures/regions'

import {
  chooseRegions,
  setRegions,
} from './actions';

import { fetchRegions } from './services/api'

async function loadRegions({ dispatch }) {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    loadRegions({ dispatch });
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
