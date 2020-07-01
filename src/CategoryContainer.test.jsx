import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoryContainer from './CategoryContainer';

jest.mock('react-redux');

const category = {
  id: 1,
  name: '한식',
};

function renderMockCategoryContainer() {
  return render((
    <CategoryContainer category={category} />
  ));
}

describe('CategoryContainer', () => {
  context('when not selected', () => {
    it('can see normal button', () => {
      const selectedCategoryId = 2;

      useSelector.mockImplementation((selector) => selector({
        selectedCategoryId,
      }));

      const { getByText } = renderMockCategoryContainer();

      expect(getByText('한식')).not.toBeNull();
    });
  });

  context('when selected', () => {
    it('can see selectedd button', () => {
      const selectedCategoryId = 1;

      useSelector.mockImplementation((selector) => selector({
        selectedCategoryId,
      }));

      const { getByText } = renderMockCategoryContainer();

      expect(getByText('한식')).toBeNull();
      expect(getByText('한식(v)')).not.toBeNull();
    });
  });

  it('can click', () => {
    const dispatch = jest.fn();

    const selectedCategoryId = 2;

    useSelector.mockImplementation((selector) => selector({
      selectedCategoryId,
    }));

    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = renderMockCategoryContainer();

    fireEvent.click(getByText('한식'));
    expect(dispatch).toBeCalledWith({
      type: 'setSelectedCategoryId',
      payload: {
        id: 1,
      },
    });
  });
});
