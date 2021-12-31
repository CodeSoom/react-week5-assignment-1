import Lists from './Lists'

export default function Regions({ items }) {
  function clickHandler(event) {
    console.log(event.target.innerText);
  }

  return (
    <Lists items={items} onClick={clickHandler} />
  );
}
