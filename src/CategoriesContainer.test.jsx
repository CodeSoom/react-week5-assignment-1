import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  function renderCategoriesContainer() {
    return render((<CategoriesContainer />));
  }

  it('CategoriesContainer가 렌더링된다.', () => {
    const { getByText } = renderCategoriesContainer();

    expect(getByText('한식')).not.toBeNull();
  });
});
