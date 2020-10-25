import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import {
  loadRegions,
} from './actions';

export default function App() {
  const foods = [
    {
      id: 1, name:'한식',
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);
  
  return (
    <div>
      <RegionsContainer />
      <div />
      <ul>
        {foods.map((food)=>(
          <li key={food.id} style={{ listStyleType: "none" }}>
            <button>{food.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
