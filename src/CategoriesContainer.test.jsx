import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

test('CategoriesContainer', () => {
  const { getByText } = render((
    <CategoriesContainer />
  ));

  expect((getByText('한식'))).not.toBeNull();
  expect((getByText('중식'))).not.toBeNull();
  expect((getByText('일식'))).not.toBeNull();
});
