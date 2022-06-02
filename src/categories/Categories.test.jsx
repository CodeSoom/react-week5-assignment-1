import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import categories from '../../fixtures/categories';

import Categories from './Categories';

jest.mock('react-redux');

describe('Categories', () => {
  const { getByText } = render((
    <Categories categories={categories} />
  ));

  describe('한식', () => {
    it('한식이 보인다', () => {
      expect(getByText(/한식/)).not.toBeNull();
    });
  });
});
