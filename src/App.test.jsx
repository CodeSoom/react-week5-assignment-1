import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';

jest.mock('./services/api');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('지역 목록을 보여준다', async () => {
    await act(async () => render(<App />));

    expect(screen.getByText('서울')).toBeInTheDocument();
    expect(screen.getByText('대구')).toBeInTheDocument();
    expect(screen.getByText('부산')).toBeInTheDocument();
  });

  it('카테고리 목록을 보여준다', async () => {
    await act(async () => render(<App />));

    expect(screen.getByText('한식')).toBeInTheDocument();
    expect(screen.getByText('중식')).toBeInTheDocument();
    expect(screen.getByText('일식')).toBeInTheDocument();
  });

  it('목록이 클릭되면 체크를 표시한다.', async () => {
    const handleClick = jest.fn();

    await act(async () => render(<App onClick={handleClick} />));

    fireEvent.click(screen.getByText('한식'));

    expect(screen.getByText('한식(V)')).toBeInTheDocument();
    expect(screen.queryByText('한식')).not.toBeInTheDocument();

    // expect(handleClick).toBeCalled();
    // 여기서 이벤트가 콜이 안되는 이유는?
  });

  it('레스토랑 목록을 출력한다.', async () => {
    // 분리 하면서 테스트 하기
  });
});
