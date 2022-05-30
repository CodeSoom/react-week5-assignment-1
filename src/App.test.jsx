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

    expect(seoul).toBeInTheDocument();
    expect(daegeon).toBeInTheDocument();
    expect(daegu).toBeInTheDocument();
    expect(busan).toBeInTheDocument();
    expect(gwangju).toBeInTheDocument();
    expect(gangwondo).toBeInTheDocument();
    expect(incheon).toBeInTheDocument();
  });
});
