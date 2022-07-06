import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('regions를 렌더링 한다.', () => {
    const regions = [
      { id: 0, name: '서울' },
      { id: 1, name: '대구' },
      { id: 2, name: '부산' },
    ];

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ regions }));

    const { container } = render(<App />);

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대구');
    expect(container).toHaveTextContent('부산');
  });
});
