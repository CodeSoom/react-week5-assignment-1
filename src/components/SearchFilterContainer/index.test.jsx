import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import SearchFilterContainer from '.';

jest.mock('react-redux');

describe('SearchFilterContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders region options', () => {
    useSelector.mockImplementation((selector) => selector({ regions: [{ id: 1, name: '서울' }], categories: [] }));
    const { getByLabelText, getByRole } = render(<SearchFilterContainer />);

    expect(getByLabelText('지역')).toBeInTheDocument();
    expect(getByRole('option', { value: '서울' })).toBeInTheDocument();
  });

  it('renders category options', () => {
    useSelector.mockImplementation((selector) => selector({ regions: [], categories: [{ id: 1, name: '한식' }] }));
    const { getByLabelText, getByRole } = render(<SearchFilterContainer />);

    expect(getByLabelText('분류')).toBeInTheDocument();
    expect(getByRole('option', { value: '한식' })).toBeInTheDocument();
  });

  context('when the component did mounted', () => {
    it('initialize options', () => {
      render(<SearchFilterContainer />);
      expect(dispatch).toBeCalled();
    });
  });
});
