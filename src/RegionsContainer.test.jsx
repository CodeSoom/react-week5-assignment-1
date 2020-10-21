import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

test('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
    ],
  }));

  const { getByText } = render((
    <RegionsContainer />
  ));

  regions.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
