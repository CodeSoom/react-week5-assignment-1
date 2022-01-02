import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  it('지역명(버튼)들을 보여준다.', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
    }));
    const { container } = render((
      <RegionsContainer />
    ));

    expect(container).toHaveTextContent('서울');
  });
});
