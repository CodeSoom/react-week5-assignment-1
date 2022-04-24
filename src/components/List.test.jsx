import { fireEvent, render } from '@testing-library/react';
import given from 'given2';
import 'given2/setup';

import regions from '../fixtures/regions';

import List from './List';

describe('List', () => {
  given('value', () => 'name');
  given('buttonList', () => regions);
  given('currentButtonInfo', () => '서울');
  given('emptyMessage', () => '정보가 없어요!');

  const handleButtonClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderList() {
    return render((
      <List
        value={given.value}
        buttonList={given.buttonList}
        currentButtonInfo={given.currentButtonInfo}
        emptyMessage={given.emptyMessage}
        onButtonClick={handleButtonClick}
      />
    ));
  }

  context('with buttonList', () => {
    given('buttonList', () => regions);

    it('renders regions', () => {
      const { container } = renderList();

      expect(container).toHaveTextContent(/서울/);
      expect(container).toHaveTextContent(/대전/);
    });

    it('updates regionName when clicks the region button', () => {
      const { getByText } = renderList();

      fireEvent.click(getByText('대전'));

      expect(handleButtonClick).toBeCalledWith({ value: '대전' });
    });
  });

  context('without buttonList', () => {
    given('buttonList', () => []);

    it('renders "정보가 없어요!"', () => {
      const { container } = renderList();

      expect(container).toHaveTextContent(/정보가 없어요!/);
    });
  });

  context('with emptyMessage', () => {
    given('buttonList', () => []);
    given('emptyMessage', () => '지역이 없어요!');

    it('renders "지역이 없어요!"', () => {
      const { container } = renderList();

      expect(container).toHaveTextContent(/지역이 없어요!/);
    });
  });

  context('without emptyMessage', () => {
    given('buttonList', () => []);
    given('emptyMessage', () => undefined);

    it('renders "정보가 없어요!"', () => {
      const { container } = renderList();

      expect(container).toHaveTextContent(/정보가 없어요!/);
    });
  });

  context('with currentButtonInfo', () => {
    given('buttonList', () => regions);
    given('currentButtonInfo', () => '서울');

    it('renders "(V)" when region name is match to currentButtonInfo', () => {
      const { queryByText } = renderList();

      expect(queryByText(/(V)/)).not.toBe(null);
    });
  });

  context('without currentButtonInfo', () => {
    given('buttonList', () => regions);
    given('currentButtonInfo', () => undefined);

    it('doesn\'t renders "(V)"', () => {
      const { queryByText } = renderList();

      expect(queryByText(/(V)/)).toBe(null);
    });
  });
});
