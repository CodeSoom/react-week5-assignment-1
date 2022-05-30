import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('지역 리스트가 주어지면', () => {
    const locationList = ['서울', '대전', '부산'];

    it('지역 선택 버튼들이 출력된다.', () => {
      const { container } = render(<App />);

      locationList.forEach((location) => {
        expect(container).toHaveTextContent(location);
      });
    });
  });

  context('음식 종류 리스트가 주어지면', () => {
    const foodTypeList = ['한식', '중식', '일식'];

    it('음식 선택 버튼들이 출력된다.', () => {
      const { container } = render(<App />);

      foodTypeList.forEach((foodType) => {
        expect(container).toHaveTextContent(foodType);
      });
    });
  });

  context('결과 리스트가 주어지면', () => {
    const resultList = ['원초밥', '밀면넘어져요'];

    it('결과 리스트 출력된다.', () => {
      const { container } = render(<App />);

      resultList.forEach((result) => {
        expect(container).toHaveTextContent(result);
      });
    });
  });
});
