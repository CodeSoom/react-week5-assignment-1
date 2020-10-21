import React from 'react';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

test('RegionsContainer', () => {
  const Regions = ['서울', '대전', '대구'];

  const { getByText } = render((
    <RegionsContainer />
  ));

  Regions.forEach((region) => {
    expect(getByText(region)).not.toBeNull();
  });
});
