import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
      selectedCategory: { category: { id: 1, name: '한식' } },
    }));
  });
  it('renders CategoriesContainer', () => {
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText(/한식/)).not.toBeNull();
  });
});
