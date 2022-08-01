import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const regions = [
    { id: 0, name: '서울' },
    { id: 1, name: '대구' },
    { id: 2, name: '부산' },
  ];

  const dispatch = jest.fn();

  it('regions를 렌더링 한다.', () => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({ regions }));

    const { container } = render(<RegionsContainer />);

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대구');
    expect(container).toHaveTextContent('부산');
  });
});
