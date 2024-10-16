import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const {addToCart, cartList} = useCart();
  const {name, price, image} = product;
  function handleAdd(){
    addToCart(product);
    console.log(cartList);
  }

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={handleAdd}>Add To Cart</button>
      </div>
    </div>
  )
}
