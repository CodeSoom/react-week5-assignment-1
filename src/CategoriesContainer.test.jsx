import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { categoryId, categories } from './fixtures/restaurant';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
    category: '',
  }));

  const renderCategoriesContainer = () => render((
    <CategoriesContainer />
  ));

  it('click 이벤트를 listen한다', () => {
    const { getByText } = renderCategoriesContainer();

    fireEvent.click(getByText('한식'), categoryId);

    expect(dispatch).toBeCalled();
  });
});
