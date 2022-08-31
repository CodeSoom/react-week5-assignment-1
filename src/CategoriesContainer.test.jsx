import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

describe('<CategoriesContainer />', () => {
  it('renders categories', () => {
    const { getByText } = render((
      <CategoriesContainer />
    ));

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
  });
});
