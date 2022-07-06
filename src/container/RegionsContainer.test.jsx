import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import regions from '../fixtures/regions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  it('지역 목록이 보여집니다.', () => {
    const { container } = render((
      <RegionsContainer />
    ));

    expect(container).toHaveTextContent('부산');
    expect(container).toHaveTextContent('대구');
  });
});
