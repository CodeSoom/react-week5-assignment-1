export default function Categories({ categories }) {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      {
        categories.map((category) => <button type="button" key={category.id} onClick={handleClick}>{category.name}</button>)
      }
    </div>
  );
}
