import React from 'react';

import { render } from '@testing-library/react';

import ButtonTemplate from './ButtonTemplate';

import regions from '../fixtures/regions';

describe('ButtonTemplate', () => {
  const renderButtonTemplate = (buttons) => render((
    <ButtonTemplate
      buttons={buttons}
    />
  ));

  it('render regions buttons', () => {
    const { queryByText } = renderButtonTemplate(regions);

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('대전')).not.toBeNull();
    expect(queryByText('대구')).not.toBeNull();
    expect(queryByText('부산')).not.toBeNull();
    expect(queryByText('광주')).not.toBeNull();
    expect(queryByText('강원도')).not.toBeNull();
    expect(queryByText('인천')).not.toBeNull();
    expect(queryByText('제주')).not.toBeNull();
    expect(queryByText('전주')).not.toBeNull();
    expect(queryByText('순천')).not.toBeNull();
  });
});
