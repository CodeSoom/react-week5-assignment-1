import LocalList from './LocalList';

export default function App() {
  const locals = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
  ];

  return (
    <LocalList locals={locals} />
  );
}
