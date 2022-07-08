import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

test('RegionContainer', () => {
  useSelector.mockImplementation((selector) => selector({ regions: [{ id: 1, name: '서울' }] }));
  const { getByText } = render(<RegionContainer />);

  expect(getByText('서울')).not.toBeNull();
});
