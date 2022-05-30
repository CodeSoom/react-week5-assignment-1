import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
  context('지역 리스트가 주어지면', () => {
    const locationList = ['서울', '대전', '부산'];

    it('지역 선택 버튼들이 출력된다.', () => {
      const { container } = render(<App />);

      locationList.forEach((location) => {
        expect(container).toHaveTextContent(location);
      });
    });
  });
});
