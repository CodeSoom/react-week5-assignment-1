import { render } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../fixtures/data';

jest.mock('react-redux');

describe('Regions', () => {
  it('지역 목록이 나타난다', () => {
    const { getByText } = render((
      <Regions
        regions={regions}
      />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
