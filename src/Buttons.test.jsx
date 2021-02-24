import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Buttons from './Buttons';

import regions from '../fixtures/regions';

describe('Buttons', () => {
  const renderButtons = (buttons) => render((
    <Buttons
      buttons={buttons}
    />
  ));
});
