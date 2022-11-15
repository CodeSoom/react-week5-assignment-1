import { render } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../fixtures/data';

jest.mock('react-redux');

describe('Regions', () => {
  it('지역 리스트가 나타난다', () => {
    const { getByText } = render((
      <Regions
        regions={regions}
      />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
