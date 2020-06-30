import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { queryByText } = render(
    <App />,
  );
  // TODO: RegionContainer 테스트, 구현 후 갱신
  // 지역 데이터가 잘 호출되는지 확인
  // 화면에 서울이 있는지 확인
});
