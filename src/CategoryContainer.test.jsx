import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryContainer from './CategoryContainer';

import categories from '../fixtures/categories';

import { setCategory } from './action';

jest.mock('react-redux');

describe('CategoryContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
    category: { id: 2, name: '중식' },
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders categoreis list', () => {
    const { container } = render((
      <CategoryContainer />
    ));

    expect(container).toHaveTextContent(categories[0].name);
  });

  it('changes state by clicking the cagetory button', () => {
    const { getByText } = render((
      <CategoryContainer />
    ));

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith(setCategory({ id: 1, name: '한식' }));
  });

  it('renders "(V)" when has category in state ', () => {
    const { container } = render((
      <CategoryContainer />
    ));

    expect(container).toHaveTextContent('(V)');
  });
});
