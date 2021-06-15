import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');
jest.mock('./services/api.js');

describe('CategoriesContainer', () => {
  it('renders categories', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],

    }));

    const { container, getByText } = render(<CategoriesContainer />);

    expect(container).toHaveTextContent(/한식/);

    fireEvent.click(getByText('한식'));
    expect(dispatch).toBeCalled();
  });
});
