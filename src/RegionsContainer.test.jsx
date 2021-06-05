import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

test('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
  }));

  const { container } = render((
    <RegionsContainer />
  ));

  expect(container).toHaveTextContent('서울');
});
