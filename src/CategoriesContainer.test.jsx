import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { category, categories } from './fixtures/restaurant';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispathch = jest.fn();

  useDispatch.mockImplementation(() => dispathch);

  useSelector.mockImplementation((selector) => selector({
    categories,
    category: '',
  }));

  const renderCategoriesContainer = () => render((
    <CategoriesContainer />
  ));

  it('click 이벤트를 listen한다', () => {
    const { getByText } = renderCategoriesContainer();

    fireEvent.click(getByText(category));

    expect(dispathch).toBeCalled();
  });
});
