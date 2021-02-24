import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Buttons from './Buttons';

describe('Buttons', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const handleClick = jest.fn();

  function renderbuttons({ buttons, selectId } = { selectId: null }) {
    return render((
      <Buttons
        buttons={buttons}
        onClick={handleClick}
        selectId={selectId}
      />
    ));
  }

  it('renders buttons', () => {
    const buttons = [{ id: 1, name: '한식' }];

    const { queryByText } = renderbuttons({ buttons });

    expect(queryByText('한식')).not.toBeNull();
  });

  it('listens button click event', () => {
    const buttons = [{ id: 1, name: '한식' }];

    const { queryByText } = renderbuttons({ buttons });

    fireEvent.click(queryByText('한식'));

    expect(handleClick).toBeCalledWith(1);
  });

  context('when selected button', () => {
    it('renders "button name" + "(V)"', () => {
      const buttons = [{ id: 1, name: '한식' }];

      const { queryByText } = renderbuttons({ buttons, selectId: 1 });

      expect(queryByText('한식(V)')).not.toBeNull();
    });
  });

  context('When not selected button', () => {
    it('renders only "button name"', () => {
      const buttons = [{ id: 1, name: '한식' }];

      const { queryByText } = renderbuttons({ buttons });

      expect(queryByText('한식(V)')).toBeNull();
    });
  });
});
