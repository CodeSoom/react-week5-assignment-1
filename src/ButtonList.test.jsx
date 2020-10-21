import React from 'react';

import { render } from '@testing-library/react';

import ButtonList from './ButtonList';

import regions from '../fixtures/regions';

describe('ButtonList', () => {
  it('show buttons', () => {
    const handleClick = jest.fn();
    const { getByText } = render((
      <ButtonList
        labels={regions}
        onClick={handleClick}
      />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
  });
});
