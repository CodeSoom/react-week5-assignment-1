import React from 'react';

import { render } from '@testing-library/react';

import RegionList from './RegionList';

describe('RegionContainer', () => {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '인천' },
  ];

  it('지역들을 보여준다.', () => {
    const { queryByText } = render(<RegionList regions={regions} />);
    expect(queryByText('서울')).toBeInTheDocument();
    expect(queryByText('인천')).toBeInTheDocument();
  });
});
