import React from 'react';
import { useSelector } from 'react-redux';

import LocaleList from '../components/LocaleList';

export default function LocaleListContainer() {
  const { locales } = useSelector((state) => ({
    locales: state.locales,
  }));

  return (
    <LocaleList
      locales={locales}
    />
  );
}
