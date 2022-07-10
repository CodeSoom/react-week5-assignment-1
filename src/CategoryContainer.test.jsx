import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { categories } from '../__fixture__/restaurantsInfo';

import CategoryContainer from './CategoryContainer';

describe('<Category/>', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const handleClick = jest.fn();

  const renderCategoryContainer = () => ((
    render(<CategoryContainer onClick={handleClick} />)
  ));

  it('클릭하면 dispatch 호출.', () => {
    const { getByText } = renderCategoryContainer();

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalled();
  });
});
