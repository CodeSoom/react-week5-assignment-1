import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  it('지역이 보인다.', () => {
    const { getByText } = render(
      <Regions
        regions={regions}
      />,
    );

    regions.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
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
