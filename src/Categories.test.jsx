import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

test('Categories', () => {
  const { getByText } = render((
    <Categories />
  ));

  expect(getByText('한식')).not.toBeNull();
  expect(getByText('중식')).not.toBeNull();
  expect(getByText('일식')).not.toBeNull();
  expect(getByText('양식')).not.toBeNull();
  expect(getByText('분식')).not.toBeNull();
  expect(getByText('과자')).not.toBeNull();
  expect(getByText('치킨')).not.toBeNull();
});
