import { render } from '@testing-library/react';

import RegionContainer from './RegionContainer';

test('RegionContainer', () => {
  const { getByText, getByRole } = render(<RegionContainer />);

  expect(getByRole('listitem')).not.toBeNull();
  expect(getByText('서울')).not.toBeNull();
});
