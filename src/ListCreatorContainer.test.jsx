// Container Components:
// 입력값(name, value)을 스토어에서 가져와서 ListCreator컴포넌트에 넘겨주는 것에 대한 테스트
import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListCreatorContainer from './ListCreatorContainer';

jest.mock('react-redux');

describe('ListCreatorContainer', () => {
  useSelector.mockImplementation((selector) => selector({
  }));

  const renderListCreatorContainer = () => render((<ListCreatorContainer />));

  it('has "등록" button', () => {
    const { getByText } = renderListCreatorContainer();

    expect(getByText(/등록/)).toBeInTheDocument();
  });
});
