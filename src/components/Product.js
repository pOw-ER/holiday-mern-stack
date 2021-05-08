
const Product = (props) => {
  return (
    <div className="products">
      <img src={props.img} alt="" />
      <div>
        <h1>{props.location} & {props.activity}</h1>
        <p>{props.description}</p>
        <a href="/booknow" className="orange-white-button ">Book Now</a>
      </div>
    </div>
  );
}

export default Product;
