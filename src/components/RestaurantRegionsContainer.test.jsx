import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import { regions } from '../../fixtures/restaurant';
import { TYPES } from '../actions/restaurant';

jest.mock('react-redux');

describe('RestaurantRegionsContainer', () => {
  it('컴포넌트가 랜더링 된 후 지역을 가져옵니다.', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockImplementation(() => mockDispatch);
    useSelector.mockImplementation(() => ({ regions, selected: {} }));

    render(<RestaurantRegionsContainer />);

    expect(mockDispatch).toBeCalled();
  });

  describe('지역을 선택하면 버튼에 선택 표시가 됩니다.', () => {
    it('버튼을 선택하면 setSelectedItem이 호출됩니다.', () => {
      const mockDispatch = jest.fn();
      const { name } = regions[0];
      useDispatch.mockImplementation(() => mockDispatch);
      useSelector.mockImplementation(() => ({ regions, selected: {} }));
      const { getByRole } = render(<RestaurantRegionsContainer />);
      const button = getByRole('button', { name: new RegExp(name) });

      fireEvent.click(button);

      expect(mockDispatch).toBeCalledWith(
        expect.objectContaining({ type: TYPES.SET_SELECTED, payload: { regionName: name } }),
      );
    });

    it('선택한 지역이 있다면 버튼에 선택 표시가 됩니다.', () => {
      const mockDispatch = jest.fn();
      const { name } = regions[0];
      useDispatch.mockImplementation(() => mockDispatch);
      useSelector.mockImplementation(() => ({
        regions,
        selected: { regionName: name },
      }));
      const { getByRole } = render(<RestaurantRegionsContainer />);

      expect(getByRole('button', { name: new RegExp(name) })).toHaveTextContent(/V/);
    });
  });
});
