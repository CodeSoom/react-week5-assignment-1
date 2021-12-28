import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  it('전역 상태 regions 렌더링', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
    }));

    const { getByText } = render(<RegionsContainer />);

    expect(getByText('서울')).toBeNull();
  });
});
