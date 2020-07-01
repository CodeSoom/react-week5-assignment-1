/**
 * # 과제 5의 요구사항
 * 1. 카테고리
 * - 카테고리 목록 보기
 * - 카테고리 선택
 *
 * 2. 지역
 * - 지역 목록 보기
 * - 지역 선택
 *
 * 3. 레스토랑
 * - 카테고리 및 지역에 따른 레스토랑 목록 보기
 */
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

import { regions } from '../__fixture__/data';

jest.mock('react-redux');
jest.mock('./services/api');

describe('<App />', () => {
  context('render App', () => {
    it('shows regions', () => {
      useSelector.mockImplementation((selector) => selector({
        regions,
      }));

      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { queryByRole } = render(<App />);

      regions.forEach((region) => {
        expect(queryByRole('button', { name: region })).not.toBeNull();
      });

      expect(dispatch).toBeCalledTimes(1);
    });
    // it('shows categories', () => {

    // });
  });

  context('with a selected region', () => {
    it('shows a mark for a selected region', () => {
      const { getByRole, queryByRole } = render(<App />);

      regions.forEach((region) => {
        fireEvent.click(getByRole('button', { name: region }));
        expect(queryByRole('button', { name: `${region}(V)` })).not.toBeNull();

        const unselectedRegions = regions.filter((item) => item !== region);
        unselectedRegions.forEach((unselectedRegion) => {
          expect(
            queryByRole('button', { name: unselectedRegion }),
          ).not.toBeNull();
        });
      });
    });
  });
});

// TODO : App TEST

// context('with a selected category', () => {
//   it('shows a mark for a selected category', () => {});
// });

// context('with a selected region &  with a selected category', () => {
//   it('shows a mark for a selected category', () => {});
//   it('shows restaurants', () => {});
// });
// ----- end : App

// describe('<Categories />', () => {
//   context('render Categories', () => {
//     it('shows categories', () => {});
//   });

//   context('with a selected category', () => {
//     it('shows a mark for a selected category', () => {});
//   });
// });

// describe('<Restaurants />', () => {
//   context('render Restaurants', () => {
//     it('does not show restaurants', () => {});
//   });
//   context('with a selected region &  with a selected category', () => {
//     it('shows restaurants', () => {});
//   });
// });
