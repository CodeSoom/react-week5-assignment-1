import { render, fireEvent } from '@testing-library/react';

import LocalList from './LocalList';

describe('LocalList', () => {
  const locals = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
  ];

  const handleBtnClick = jest.fn();

  it('지역명(버튼)들을 리스트로 보여준다.', () => {
    const { container } = render(
      <LocalList
        locals={locals}
        onClick={handleBtnClick}
      />,
    );

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
    expect(container).toHaveTextContent('대구');
  });

  it('지역명(버튼)들을 누르면 handleBtnClick 함수가 실행된다.', () => {
    const { queryByText } = render(
      <LocalList
        locals={locals}
        onClick={handleBtnClick}
      />,
    );

    expect(handleBtnClick).not.toBeCalled();
    fireEvent.click(queryByText('서울'));
    expect(handleBtnClick).toBeCalled();
  });
});
