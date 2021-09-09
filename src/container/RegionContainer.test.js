import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

describe('RegionContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
    ],
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches loadRegions', () => {
    render(<RegionContainer />);

    expect(dispatch).toBeCalled();
  });

  it('renders regions', () => {
    const { container } = render(<RegionContainer />);

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
    expect(container).toHaveTextContent('대구');
  });
});
