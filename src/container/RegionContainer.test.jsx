import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { updateField } from '../store/reducer';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

describe('RegionContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '경기' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
    ],
    selectedRegion: {},
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches loadRegions', () => {
    const { getByText } = render(<RegionContainer />);

    fireEvent.click(getByText('경기'));

    expect(typeof dispatch.mock.calls[0][0]).toBe('function');

    expect(dispatch.mock.calls[1][0]).toEqual(updateField({
      field: 'selectedRegion',
      value: { id: 1, name: '경기' },
    }));
  });

  it('renders regions', () => {
    const { container } = render(<RegionContainer />);

    expect(container).toHaveTextContent('경기');
    expect(container).toHaveTextContent('대전');
    expect(container).toHaveTextContent('대구');
  });
});
