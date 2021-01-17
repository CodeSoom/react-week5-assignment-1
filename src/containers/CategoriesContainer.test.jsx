import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../../fixtures';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    category: {
      categories,
      selectedCategoryId: 0,
    },
  }));

  const { queryByText } = render(<CategoriesContainer />);

  expect(queryByText(/한식/)).not.toBeNull();
  expect(queryByText(/중식/)).not.toBeNull();
  expect(queryByText(/일식/)).not.toBeNull();

  fireEvent.click(queryByText(/한식/));

  expect(dispatch).toBeCalledWith({
    type: 'updateSelectedCategoryId',
    payload: {
      categoryId: 1,
    },
  });
});

// [ 고민 중인 부분입니다. ]
// 우선 주석 처리로 고민의 흔적을 남겨놓습니다.

// describe('CategoriesContainer', () => {
//   const dispatch = jest.fn();

//   useDispatch.mockImplementation(() => dispatch);

//   beforeEach(() => {
//     useSelector.mockImplementation((selector) => selector({
//       category: {
//         categories,
//         selectedCategoryId: 0,
//       },
//     }));
//   });

//   function renderContainer() {
//     return render(
//       <CategoriesContainer />,
//     );
//   }

//   it('not excute dispatch selected categoryId', () => {
//     const { queryByText } = renderContainer();

//     expect(queryByText(/한식/)).not.toBeNull();
//     expect(queryByText(/중식/)).not.toBeNull();
//     expect(queryByText(/일식/)).not.toBeNull();
//   });

//   it('excute dispatch selected categoryId', () => {
//     const { queryByText } = renderContainer();

//     fireEvent.click(queryByText(/한식/));

//     expect(dispatch).toBeCalledWith({
//       type: 'updateSelectedCategoryId',
//       payload: {
//         categoryId: 1,
//       },
//     });
//   });

//   it('changed selected categoryId to 1', () => {
//     useSelector.mockImplementation((selector) => selector({
//       category: {
//         categories,
//         selectedCategoryId: 1,
//       },
//     }));

//     const { container, queryByText } = renderContainer();

//     console.log('테스트 - ', container);
//     expect(queryByText(/한식/)).not.toBeNull();
//   });
// });
