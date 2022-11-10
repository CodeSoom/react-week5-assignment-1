import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  function renderCategories() {
    return render((<Categories categories={categories} />));
  }

  it('Categories가 렌더링된다.', () => {
    const { getByText } = renderCategories();

    expect(getByText('한식')).not.toBeNull();
  })
})