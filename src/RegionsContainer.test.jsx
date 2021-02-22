import React from 'react';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  function renderRegionsContainer({ regions }) {
    return render((
      <RegionsContainer regions={regions} />
    ));
  }

  it('button들을 보여준다.', () => {
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

    const { queryByText } = renderRegionsContainer({ regions });

    regions.forEach((region) => {
      const { name } = region;

      expect(queryByText(name)).not.toBeNull();
    });
  });
});
