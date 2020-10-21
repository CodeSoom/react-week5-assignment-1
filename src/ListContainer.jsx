import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { results } = useSelector((state) => ({
    results: state.results,
  }));

  return (
    <List items={results} />
  );
}
