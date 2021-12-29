import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import { regions } from '../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantRegionsContainer', () => {
  it('컴포넌트가 랜더링 된 후 지역을 가져옵니다.', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockImplementation(() => mockDispatch);
    useSelector.mockImplementation(() => ({ regions, selected: {} }));

    render(<RestaurantRegionsContainer />);

    expect(mockDispatch).toBeCalled();
  });

  it('지역을 선택하면 버튼에 선택 표시가 됩니다.', () => {
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
