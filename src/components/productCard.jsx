
export default function ProductCard(props) {
  return (
    <div className="bg-red-500 text-white w-60 h-[330.5px]">
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p>Price: {props.price}</p>
    </div>
  );
}