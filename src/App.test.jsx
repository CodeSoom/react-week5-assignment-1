import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('지역 목록을 보여준다', () => {
    const { getByText } = render(
      <App />,
    );

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
    expect(getByText('양식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
  });

  it('카테고리 목록을 보여준다', () => {
    const { getByText } = render(
      <App />,
    );

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
    expect(getByText('양식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
  });
});
