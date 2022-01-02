import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { REGIONS } from '../../lib/fixtures';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      regions: REGIONS,
      region: REGIONS[1],
    })
  );

  it('컴포넌트가 깨지지 않고 정상적으로 렌더링됩니다', () => {
    const { container } = render(<RegionsContainer />);

    expect(container).toHaveTextContent('서울');
  });

  it('지역을 클릭하면 dispatch가 실행된다', () => {
    const { getByRole } = render(<RegionsContainer />);

    const button = getByRole('button', { name: '서울' });

    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalled();
  });
});
