import { render } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../fixtures/data';

jest.mock('react-redux');

describe('Categories', () => {
  it('분류 목록이 나타난다', () => {
    const { getByText } = render((
      <Categories
        categories={categories}
      />
    ));

    expect(getByText('분식')).not.toBeNull();
  });
});
