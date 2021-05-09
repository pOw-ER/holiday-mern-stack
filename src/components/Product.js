import { Link, useHistory } from 'react-router-dom'
const Product = (props) => {
  const history = useHistory()
  return (
    <div className="products">
      <img src={props.img} alt="" />
      <div>
        <h1>{props.location} & {props.activity}</h1>
        <p>{props.description}</p>
        <Link to={`/book/${props.id}`} onClick={() => history.push(`/book/${props.id}`)} className="orange-white-button ">Book Now</Link>
      </div>
    </div>
  );
}

export default Product;
