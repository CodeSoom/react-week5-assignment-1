import React from 'react';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('./services/api');

test('RegionsContainer', () => {
  const useSelector = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 1, name: '서울' }, { id: 2, name: '대전' }],
  }));

  const { queryByText } = render(<RegionsContainer />);

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('대전')).not.toBeNull();
});
