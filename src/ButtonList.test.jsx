import React from 'react';

import { render } from '@testing-library/react';

import ButtonList from './ButtonList';

import cities from '../fixtures/cities';

describe('ButtonList', () => {
  it('show buttons', () => {
    const handleClick = jest.fn();
    const { getByText } = render((
      <ButtonList
        labels={cities}
        onClick={handleClick}
      />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
  });
});
