import { fireEvent, render } from '@testing-library/react';

import regions from '../../fixture/regions';
import { baseMessage } from '../../constants/emptyMessages';

import Regions from './Regions';

describe('Regions', () => {
  context('지역 목록이 있으면', () => {
    it('화면에 지역들이 보인다.', () => {
      const { getByRole, getByText } = render(<Regions regions={regions} />);

      expect(getByRole('list')).toBeInTheDocument();
      expect(getByText('서울')).toBeInTheDocument();
    });
  });

  context('지역 목록이 없거나 비어있으면', () => {
    it('지역 목록이 비어있다는 문구가 보인다.', () => {
      const { queryByRole, getByText } = render(<Regions regions={null} />);

      expect(queryByRole('list')).not.toBeInTheDocument();
      expect(getByText(baseMessage('지역 목록')));
    });
  });

  it('지역을 클릭하면 해당 지역에 V 표시가 붙는다', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <Regions
        regions={regions}
        selectedRegion={regions[0].name}
        onClick={onClick}
      />,
    );

    const regionNameButton = getByText(regions[0].name, { exact: false });

    fireEvent.click(regionNameButton);

    expect(onClick).toBeCalledWith(regions[0].name);

    expect(regionNameButton).toHaveTextContent(/V/g);
  });
});
