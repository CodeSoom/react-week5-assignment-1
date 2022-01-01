// Container Components:
// 카테고리 목록을 스토어에서 가져와서 카테코리 컴포넌트에 넘겨주는 것에 대한 테스트
import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  it('sets restaurants', () => {
    const { getByText } = render(
      <CategoriesContainer />,
    );

    expect(getByText('한식')).toBeInTheDocument();
  });
});
