import { render, fireEvent, screen } from '@testing-library/react';

// 에러 메세지에 떠서 일단 사용, 추후 학습 필요.
import { act } from 'react-dom/test-utils';

import App from './App';

// jest.mock('./services/api');

describe('App', () => {
  it('renders cateogries', async () => {
    // const { getByText } = render(<App />);

    // expect(getByText('한식')).not.toBeNull();
    // expect(getByText('중식')).not.toBeNull();

    // 비동기로 바꾸니까 렌더링되지 않는 문제 발생
    await act(async () => render(<App />));

    expect(screen.getByText('한식')).not.toBeNull();
  });

  // it('renders regions', () => {
  //   const { getByText } = render(<App />);

  //   expect(getByText('서울')).not.toBeNull();
  //   expect(getByText('부산')).not.toBeNull();
  // });

  // it('listens click event', () => {
  //   const { getByText } = render(<App />);

  //   expect(getByText('한식')).not.toBeNull();
  //   expect(getByText('서울')).not.toBeNull();

  //   fireEvent.click(getByText('한식'));
  //   fireEvent.click(getByText('서울'));

  //   expect(getByText('한식(V)')).not.toBeNull();
  //   expect(getByText('서울(V)')).not.toBeNull();
  // });
});
