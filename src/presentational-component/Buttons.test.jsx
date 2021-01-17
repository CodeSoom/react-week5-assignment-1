import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Buttons from './Buttons';

import { regions } from '../../fixtures/fixtures';

describe('Buttons', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderButtonList({ selectedId = null }) {
    return render((
      <Buttons
        labels={regions}
        onClick={handleClick}
        selectedId={selectedId}
      />
    ));
  }

  it('show buttons', () => {
    const { getByText } = renderButtonList({});
    expect(getByText('서울')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
  });

  it('show checked value with (V)', () => {
    const { getByText } = renderButtonList({ selectedId: 1 });
    expect(getByText('서울(V)')).not.toBeNull();
  });

  describe('click', () => {
    it('calls handleClick', () => {
      const { getByText } = renderButtonList({});
      fireEvent.click(getByText('서울'));

      expect(handleClick).toBeCalledTimes(1);
    });
  });
});
