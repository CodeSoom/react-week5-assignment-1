import { render } from '@testing-library/react';

import LocalList from './LocalList';

describe('LocalList', () => {
  it('지역명(버튼)들을 리스트로 보여준다.', () => {
    const locals = [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 2, name: '대구' },
    ];

    const { container } = render(
      <LocalList locals={locals} />,
    );

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
    expect(container).toHaveTextContent('대구');
  });
});
