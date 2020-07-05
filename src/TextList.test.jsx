import React from 'react';
import { render, screen } from '@testing-library/react';

import TextList from './TextList';

test('renders text list', () => {
  // given
  const elements = [1, 2, 3, 4, 5].map((i) => ({ id: i, name: `Text ${i}` }));
  // when
  render(
    <TextList
      elements={elements}
    />,
  );
  // then
  expect(screen.queryAllByRole('listitem')).toHaveLength(elements.length);
});
