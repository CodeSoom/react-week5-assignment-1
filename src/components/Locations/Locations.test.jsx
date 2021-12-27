import { fireEvent, render } from '@testing-library/react';
import Locations from './Locations';

describe('Locations', () => {
  it('전달된 지역명들을 노출한다.', () => {
    const locations = [
      { id: 1, name: '서울' },
    ];
    const { getByText } = render(<Locations locations={locations} />);

    expect(getByText('서울')).not.toBeNull();
  });

  it('지역을 클릭하면 onClick 함수를 실행한다.', () => {
    const locations = [
      { id: 1, name: '서울' },
    ];
    const onClick = jest.fn();
    const { getByText } = render(
      <Locations
        onClick={onClick}
        locations={locations}
      />,
    );

    fireEvent.click(getByText('서울'));

    expect(onClick).toBeCalledWith({ id: 1, name: '서울' });
  });
});
