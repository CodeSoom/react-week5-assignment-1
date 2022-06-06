import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { CATEGORIES } from './fixture';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: CATEGORIES,
    category: { id: 1, name: '한식' },
  }));

  it('render', () => {
    const { container } = render(<CategoriesContainer />);

    expect(container).toHaveTextContent('한식');
  });
});
