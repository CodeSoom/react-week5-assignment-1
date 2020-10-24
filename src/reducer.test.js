import React from 'react';

import { render } from '@testing-library/react';

import reducer from './reducer';

import {
  setRegions
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
   const initialState = {
     regions: [],
   };
   const state = reducer(initialState, setRegions(regions)); 

   expect(state).not.toHaveLength(0);
  });
});