import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { initialState } from './reducer';
import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  it('renders restaurants page', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [{ id: 1, name: '한식' }],
    }));

    const { getByText } = render(<CategoriesContainer />);

    expect(getByText(/한식/)).not.toBeNull();
  });
});
