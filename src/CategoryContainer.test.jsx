import React from 'react';

import { render } from '@testing-library/react';

import CategoryContainer from './CategoryContainer';

jest.mock('react-redux');

test('CategoryContainer', () => {
  const category = {
    id: 1,
    name: '한식',
  };

  const { getByText } = render((
    <CategoryContainer category={category} />
  ));

  expect(getByText('한식')).not.toBeNull();
});
