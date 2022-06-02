import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesConainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: [{ id: 1, name: '한식' }, { id: 2, name: '중식' }],
  }));

  it('레스토랑 업종 목록을 호출한다.', () => {
    const { getByText } = render(<CategoriesContainer />);

    expect(dispatch).toBeCalledWith({
      type: 'loadCategories',
    });

    expect(getByText('한식')).toBeInTheDocument();
  });
});
