import { render } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../fixtures/data';

jest.mock('react-redux');

describe('Categories', () => {
  it('Categories 리스트가 나타난다', () => {
    const { getByText } = render((
      <Categories
        categories={categories}
      />
    ));

    expect(getByText('한식')).not.toBeNull();
  });
});
