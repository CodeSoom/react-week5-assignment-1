import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Buttons from './Buttons';

describe('Buttons', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const handleClick = jest.fn();

  function renderButtons({ buttons, selectedButton } = {
    selectButton: null,
  }) {
    return render((
      <Buttons
        buttons={buttons}
        onClick={handleClick}
        selectedButton={selectedButton}
      />
    ));
  }

  it('renders buttons', () => {
    const buttons = [{ id: 1, name: '한식' }];

    const { queryByText } = renderButtons({ buttons });

    expect(queryByText('한식')).not.toBeNull();
  });

  it('listens button click event', () => {
    const buttons = [{ id: 1, name: '한식' }];

    const { queryByText } = renderButtons({ buttons });

    fireEvent.click(queryByText('한식'));

    expect(handleClick).toBeCalledWith({ id: 1, name: '한식' });
  });

  context('when selected button', () => {
    it('renders "button name" + "(V)"', () => {
      const buttons = [{ id: 1, name: '한식' }];

      const { queryByText } = renderButtons((
        {
          buttons,
          selectedButton: {
            id: 1,
            name: '한식',
          },
        }
      ));

      expect(queryByText('한식(V)')).not.toBeNull();
    });
  });

  context('When not selected button', () => {
    it('renders only "button name"', () => {
      const buttons = [{ id: 1, name: '한식' }];

      const { queryByText } = renderButtons({ buttons });

      expect(queryByText('한식(V)')).toBeNull();
    });
  });
});
