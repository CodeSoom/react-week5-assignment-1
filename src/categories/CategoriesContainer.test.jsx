import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../../fixtures/categories';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const setState = (selectedCategoryId, selectedRegionName) => {
    useSelector.mockImplementation((selector) => selector({
      category: {
        categories,
        selectedId: selectedCategoryId,
      },
      region: {
        selectedName: selectedRegionName,
      },
    }));
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders category name, renders clicked name, calls dispatch', () => {
    setState(1, '서울');

    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText(/양식/)).not.toBeNull();

    expect(queryByText(/한식\(V\)/)).not.toBeNull();

    fireEvent.click(queryByText(/한식/));

    expect(dispatch).toBeCalledWith({
      type: 'selectCategory',
      payload: {
        categoryId: 1,
      },
    });
  });

  context('when clicked id is different with previous selected id and region has been selected', () => {
    beforeEach(() => {
      setState(1, 'selected');
    });

    it('calls dispatch 2 times', () => {
      const { queryByText } = render(<CategoriesContainer />);

      fireEvent.click(queryByText(/양식/));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when clicked name is the same with previous selected name', () => {
    beforeEach(() => {
      setState(1, 'selected');
    });
    it('calls dispatch 1 time', () => {
      const { queryByText } = render(<CategoriesContainer />);

      fireEvent.click(queryByText(/한식/));

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when category has not been selected', () => {
    beforeEach(() => {
      setState(1, null);
    });
    it('calls dispatch 1 time', () => {
      const { queryByText } = render(<CategoriesContainer />);

      fireEvent.click(queryByText(/부산/));

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when clicked id is the same with previous selected name and category has been selected', () => {
    beforeEach(() => {
      setState(1, null);
    });
    it('calls dispatch 1 time', () => {
      const { queryByText } = render(<CategoriesContainer />);

      fireEvent.click(queryByText(/한식/));

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
