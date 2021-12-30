import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LocationsContainer from './LocationsContainer';
import { setLocation } from '../../reducer/actions';
import { locations } from '../../fixtures';

jest.mock('react-redux');
jest.mock('../../services/api');

describe('LocationsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockRestore();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('컴포넌트 mount시, 지역명들을 fetch한다.', async () => {
    useSelector.mockImplementation((selector) => selector({
      locations: [],
    }));

    render(<LocationsContainer />);
    expect(dispatch).toBeCalled();
  });

  it('지역을 클릭하면 dispatch를 실행한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      locations,
    }));

    const { getByText } = render(<LocationsContainer />);

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith(setLocation({ id: 1, name: '서울', selected: false }));
  });
});
