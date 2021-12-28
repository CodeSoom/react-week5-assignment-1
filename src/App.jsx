export default function App() {
  const addresses = [
    {
      id: 'eaebe552-ae57-4ac8-8c3c-1cb3d9dd9e54',
      name: '서울',
    },
    {
      id: '2ae6620b-e902-4fc4-ac6d-f4a733acf2db',
      name: '대전',
    },
    {
      id: 'dbe6172f-efb9-4e00-8cbc-21cbb5f2eaab',
      name: '대구',
    }];

  const categorires = [
    {
      id: '42281be6-d068-4654-8337-a24ff4cc8200',
      name: '한식',
    },
    {
      id: '0e141168-38f6-4a87-8e61-e8a2f5b3a532',
      name: '중식',
    },
    {
      id: 'ca8eb50d-5a0f-42e0-8859-2f52c97ff641',
      name: '일식',
    },
    {
      id: 'b8de164a-76c9-45b8-a2f7-a5fb5e5b39e2',
      name: '양식',
    },
    {
      id: '94497f02-7db4-4e5a-9570-8edcbd9d4718',
      name: '분식',
    }];

  return (
    <>
      <ul>
        {addresses.map(({ id, name }) => (<li key={id}>{name}</li>))}
      </ul>

      <ul>
        {categorires.map(({ id, name }) => (<li key={id}>{name}</li>))}
      </ul>
    </>
  );
}
