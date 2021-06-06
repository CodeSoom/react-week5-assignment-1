import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  it('renders categories list', () => {
    beforeEach(() => {
      useSelector.mockImplementation(() => ({
        categories: [
          { id: 1, name: '한식' },
        ],
      }));
    });
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText(/한식/)).not.toBeNull();
  });
});
