import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('지역명(버튼)들을 보여준다.', () => {
    const { container } = render(
      <App />,
    );

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
    expect(container).toHaveTextContent('대구');
  });
});
