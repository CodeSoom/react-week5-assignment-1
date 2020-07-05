import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    selected: {
      region: '서울',
    },
    regions,
  }));

  context('with regions', () => {
    it('지역 항목들이 보인다.', () => {
      const { getByText } = render(
        <RegionsContainer />,
      );

      regions.forEach(({ name }) => {
        expect(getByText(new RegExp(name))).not.toBeNull();
      });
    });
  });

  context('when click region', () => {
    it('dispatch가 실행된다.', () => {
      const { getByText } = render(
        <RegionsContainer />,
      );

      fireEvent.click(getByText(/서울/));

      expect(dispatch).toBeCalled();
    });

    it('선택된 region에 (V)가 표시된다.', () => {
      const { getByText } = render(
        <RegionsContainer />,
      );

      expect(getByText(/(V)/)).not.toBeNull();
    });
  });
});
