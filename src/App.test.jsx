import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('지역 목록을 보여준다', async () => {
    const regions = ['서울', '대전', '대구', '부산', '광주'];
    const { findByText } = render(
      <App regions={regions} />,
    );

    await expect(findByText('서울')).not.toBeNull();
    await expect(findByText('대구')).not.toBeNull();
    await expect(findByText('부산')).not.toBeNull();
    await expect(findByText('대전')).not.toBeNull();
    await expect(findByText('광주')).not.toBeNull();
  });

  it('카테고리 목록을 보여준다', async () => {
    const { findByText } = render(
      <App />,
    );

    await expect(findByText('한식')).not.toBeNull();
    await expect(findByText('중식')).not.toBeNull();
    await expect(findByText('일식')).not.toBeNull();
    await expect(findByText('양식')).not.toBeNull();
    await expect(findByText('분식')).not.toBeNull();
  });

  it('목록이 클릭되면 체크를 표시한다.', async () => {
    const handleClick = jest.fn();

    const { findByText } = render(
      <App onclick={handleClick} />,
    );

    fireEvent.click(findByText('한식'));

    await expect(findByText('한식')).toBeNull();
    await expect(findByText('한식(V)')).not.toBeNull();
  });
});
