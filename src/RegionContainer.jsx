import React from 'react';
import { useSelector } from 'react-redux';

import Region from './Region';

export default function RegionContainer() {
  const { regions } = useSelector((state) => state);

  return <Region regions={regions} />;
}
