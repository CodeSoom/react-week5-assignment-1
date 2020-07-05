import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import { regions, selectedRegion } from '../fixtures/regions';

describe('Regions', () => {
  describe('상위 컴포넌트에서 받은 props 테스트', () => {
    const onClick = jest.fn();

    test('value를 버튼 이름으로 출력', () => {
      const { getByText } = render((
        <Regions
          regions={regions}
          selectedRegion={selectedRegion}
          onClick={onClick}
        />
      ));

      expect(getByText(/서울/)).not.toBeNull();
    });

    test('버튼 동작 테스트', () => {
      const { getByText } = render((
        <Regions
          regions={regions}
          selectedRegion={selectedRegion}
          onClick={onClick}
        />
      ));

      expect(onClick).not.toBeCalled();

      fireEvent.click(getByText(/서울/));

      expect(onClick).toBeCalledWith(1);
    });

    test('selectedRegion 테스트', () => {
      const { container } = render((
        <Regions
          regions={regions}
          selectedRegion={selectedRegion}
          onClick={onClick}
        />
      ));

      expect(container).toHaveTextContent('서울(V)');
    });
  });
});
