import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonContainer from '.';

describe('ButtonContainer', () => {
  const name = '부산';
  const search = 'region';

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      search: {
        region: '서울',
      },
    }));
  });

  context('when selected', () => {
    it('renders button with (V) when selected', () => {
      const { getByRole } = render(<ButtonContainer name="서울" search={search} />);

      expect(getByRole('button', { name: '서울(V)' })).toBeInTheDocument();
    });
  });

  context('when not selected', () => {
    it('renders button witout (V)', () => {
      const { getByRole } = render(<ButtonContainer name={name} search={search} />);

      expect(getByRole('button', { name })).toBeInTheDocument();
    });
  });

  it('passes "changeSearch" action', () => {
    const { getByRole } = render(<ButtonContainer name={name} search={search} />);

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByRole('button', { name }));

    expect(dispatch).toBeCalledWith({
      type: 'changeSearch',
      payload: {
        search,
        value: name,
      },
    });
  });
});
