import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '부산' },
      { id: 2, name: '대구' },
    ],
  }));

  it('카테고리 목록이 보여집니다.', () => {
    const { container } = render((
      <RegionsContainer />
    ));

    expect(container).toHaveTextContent('부산');
    expect(container).toHaveTextContent('대구');
  });
});
