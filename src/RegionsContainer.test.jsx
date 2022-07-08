import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { region, regions } from './fixtures/restaurant';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispathch = jest.fn();

  useDispatch.mockImplementation(() => dispathch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    region: '',
  }));

  const renderRegionsContainer = () => render((
    <RegionsContainer />
  ));

  it('click 이벤트를 listen한다', () => {
    const { getByText } = renderRegionsContainer();

    fireEvent.click(getByText(region));

    expect(dispathch).toBeCalled();
  });
});
