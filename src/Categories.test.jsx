import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

test('Categories', () => {
  const handleInputText = jest.fn();

  const { getByText } = render((
    <Categories categories={categories} onClick={handleInputText} />
  ));

  expect(getByText('한식')).not.toBeNull();

  // expect(handleInputText).toBeCalled();
});
