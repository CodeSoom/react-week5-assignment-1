import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  const { queryByText } = render((
    <RegionsContainer />
  ));

  expect(queryByText(/서울/)).not.toBeNull();
});
