import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import LocationsContainer from './LocationsContainer';

jest.mock('react-redux');
jest.mock('../../api/services');

describe('LocationsContainer', () => {
  it('지역명들을 fetch한 후 노출한다.', () => {
    const { getByText } = render(<LocationsContainer />);

    expect(getByText('서울')).not.toBeNull();
  });

  it('지역을 클릭하면 dispatch를 실행한다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    const { getByText } = render(<LocationsContainer />);

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({ id: 1, name: '서울' });
  });
});
