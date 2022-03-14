import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  it('지역명(버튼)들을 보여준다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
    }));
    const { container, getByText } = render((
      <RegionsContainer />
    ));

    expect(container).toHaveTextContent('서울');
    fireEvent.click(getByText('서울'));
    expect(dispatch).toBeCalled();
  });
});
