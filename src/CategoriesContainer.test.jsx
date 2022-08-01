import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const categories = [
    { id: 0, name: '한식' },
    { id: 1, name: '중식' },
    { id: 2, name: '일식' },
  ];

  const dispatch = jest.fn();

  it('categories를 렌더링 한다.', () => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({ categories }));

    const { container } = render(<CategoriesContainer />);

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
    expect(container).toHaveTextContent('일식');
  });
});
