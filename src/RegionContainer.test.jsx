import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

test('RegionContainer', () => {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
  ];

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { getByText, getByRole } = render(<RegionContainer regions={regions} />);

  expect(getByRole('listitem')).not.toBeNull();
  expect(getByText(regions[1].name)).not.toBeNull();
});
