import React from 'react';

import { render } from '@testing-library/react';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

test('RegionContainer', () => {
  const region = {
    id: 1,
    name: '부산',
  };

  const { getByText } = render((
    <RegionContainer region={region} />
  ));

  expect(getByText('부산')).not.toBeNull();
});
