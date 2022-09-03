import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

test('RegionContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
    ],
  }));
  const { getByText } = render((
    <RegionContainer />
  ));

  expect((getByText('서울'))).not.toBeNull();
  expect((getByText('대전'))).not.toBeNull();
});
