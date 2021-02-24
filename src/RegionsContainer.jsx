import React from 'react';

import { useSelector } from 'react-redux';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <Buttons buttons={regions} />
  );
}
