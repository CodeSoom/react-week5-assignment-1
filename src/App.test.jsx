import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('리스트들이 제대로 렌더링되어야 한다.', () => {
    const { getByText } = render(<App />);

    expect(getByText('서울')).not.toBeUndefined();
    expect(getByText('한식')).not.toBeUndefined();
    expect(getByText('원초밥')).not.toBeUndefined();
  });

  context('버튼을 클릭했을 때', () => {
    it('이름 뒤에 (V)가 표시되어야 한다.', () => {
      const { getByText } = render(<App />);

      fireEvent.click(getByText('서울'));

      expect(getByText('서울(V)')).not.toBeUndefined();
    });

    it('(V) 표시된 다른 버튼은 (V)가 없어져야 한다.', () => {
      const { getByText } = render(<App />);

      fireEvent.click(getByText('서울'));

      expect(getByText('서울(V)')).not.toBeUndefined();

      fireEvent.click(getByText('대전'));

      expect(getByText('서울')).not.toBeUndefined();
      expect(getByText('대전(V)')).not.toBeUndefined();
    });
  });

  context('버튼을 클릭하지 않았다면', () => {
    it('이름 뒤에 (V)가 표시되지 않아야 한다.', () => {
      const { getByText } = render(<App />);

      expect(getByText('서울')).not.toBeUndefined();
    });
  });
});
