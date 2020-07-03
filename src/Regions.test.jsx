import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
    { id: 4, name: '부산' },
    { id: 5, name: '광주' },
    { id: 6, name: '강원도' },
    { id: 7, name: '인천' },
  ];

  const handleClick = jest.fn();

  it('지역이 보인다.', () => {
    const { getByText } = render(
      <Regions
        regions={regions}
      />,
    );

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
    expect(getByText('광주')).not.toBeNull();
    expect(getByText('강원도')).not.toBeNull();
    expect(getByText('인천')).not.toBeNull();
  });

  it('버튼을 클릭하면 handleClick이 호출된다.', () => {
    const { getByText } = render(
      <Regions
        regions={regions}
        onClick={handleClick}
      />,
    );

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });

  context('with selected id', () => {
    it('선택된 카테고리에 (V)가 표시된다.', () => {
      const region = '서울';

      const { getByText } = render(
        <Regions
          selected={region}
          regions={regions}
        />,
      );

      expect(getByText('서울(V)')).not.toBeNull();
    });
  });

  context('without selected id', () => {
    it('(V)가 표시되지 않는다..', () => {
      const region = '';

      const { container } = render(
        <Regions
          selected={region}
          regions={regions}
        />,
      );

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
