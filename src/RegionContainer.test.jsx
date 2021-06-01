import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

test('RegionContainer', () => {
  const regions = ['서울', '대전', '대구'];

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { getByText, getByRole } = render(<RegionContainer regions={regions} />);

  expect(getByRole('listitem')).not.toBeNull();
  expect(getByText(regions[1])).not.toBeNull();
});
