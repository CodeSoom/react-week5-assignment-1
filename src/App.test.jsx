import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp() {
    return render((
      <App />
    ));
  }

  it('button들을 보여준다.', () => {
    const { queryByText } = renderApp();

    const regions = [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
      { id: 4, name: '부산' },
      { id: 5, name: '광주' },
      { id: 6, name: '강원도' },
      { id: 7, name: '인천' },
      { id: 1214, name: '제주' },
      { id: 1219, name: '전주' },
      { id: 1230, name: '순천' },
    ];

    const categories = [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
      { id: 3, name: '일식' },
      { id: 4, name: '양식' },
      { id: 5, name: '분식' },
      { id: 6, name: '과자' },
      { id: 7, name: '치킨' },
      { id: 1215, name: '아시아식' },
      { id: 1216, name: '중동' },
      { id: 1217, name: '가정식' },
      { id: 1218, name: '3분요리' },
      { id: 1231, name: '냉동' },
    ];

    regions.forEach((region) => {
      const { name } = region;

      expect(queryByText(name)).not.toBeNull();
    });

    categories.forEach((category) => {
      const { name } = category;

      expect(queryByText(name)).not.toBeNull();
    });
  });
});
