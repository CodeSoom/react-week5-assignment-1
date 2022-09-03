import { render } from '@testing-library/react';

import RegionContainer from './RegionContainer';

test('RegionContainer', () => {
  const { getByText } = render((
    <RegionContainer />
  ));

  expect((getByText('서울'))).not.toBeNull();
  expect((getByText('부산'))).not.toBeNull();
  expect((getByText('독도'))).not.toBeNull();
});
