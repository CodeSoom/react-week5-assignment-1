import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RegionContainer from './RegionContainer';

describe('<RegionContainer/>', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
  }));

  const handleClick = jest.fn();

  const renderRegionContainer = () => ((
    render(<RegionContainer onClick={handleClick} />)
  ));

  it('클릭하면 dispatch 호출.', () => {
    const { getByText } = renderRegionContainer();

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalled();
  });
});
