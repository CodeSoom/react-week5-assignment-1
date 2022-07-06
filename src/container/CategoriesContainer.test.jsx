import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
      { id: 2, name: '양식' },
    ],
  }));

  it('카테고리 목록이 보여집니다.', () => {
    const { container } = render((
      <CategoriesContainer />
    ));

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('양식');
  });
});
