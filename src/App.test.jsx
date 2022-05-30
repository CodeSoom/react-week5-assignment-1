import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders regions list', () => {
    render(<App />);
    const seoul = screen.getByText('서울');
    const daegeon = screen.getByText('대전');
    const daegu = screen.getByText('대구');
    const busan = screen.getByText('부산');
    const gwangju = screen.getByText('광주');
    const gangwondo = screen.getByText('강원도');
    const incheon = screen.getByText('인천');

    expect(seoul).toHaveValue('1');
    expect(daegeon).toHaveValue('2');
    expect(daegu).toHaveValue('3');
    expect(busan).toHaveValue('4');
    expect(gwangju).toHaveValue('5');
    expect(gangwondo).toHaveValue('6');
    expect(incheon).toHaveValue('7');
  });
});
