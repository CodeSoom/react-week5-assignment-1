import React from 'react';

import { render } from '@testing-library/react';

import ButtonList from './ButtonList';

import regions from '../../fixtures/regions';

describe('ButtonList', () => {
  const handleClick = jest.fn();
  function renderButtonList(id = 0) {
    return render((
      <ButtonList
        labels={regions}
        onClick={handleClick}
        selectedId={id}
      />
    ));
  }

  it('show buttons', () => {
    const { getByText } = renderButtonList();
    expect(getByText('서울')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
  });

  it('show checked value with (V)', () => {
    const { getByText } = renderButtonList(1);
    expect(getByText('서울(V)')).not.toBeNull();
  });
});
