import Lists from './Lists'

export default function Categories({ items }) {
  function clickHandler(event) {
    console.log(event.target.id);
  }

  return (
    <Lists items={items} onClick={clickHandler} />
  );
}
