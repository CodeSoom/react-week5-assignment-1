export default function AddressListContainer() {
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

  return (
    <ul>
      {addresses.map(({ id, name }) => (<li key={id}>{name}</li>))}
    </ul>
  );
}
