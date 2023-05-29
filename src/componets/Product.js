import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slice/cartslice";
import { wishListCart } from "../store/slice/wishlist";



export const Product=(props) => {
      const { img, rating, title, price}=props;
    const [isadded, setisadded] = useState(false);
    const [isWished, setIsWished] = useState(false);

    const dispatch=useDispatch();

    const handleAddTOcart = () => {
      const item = { ...props };
       dispatch(addItem(item));
      setisadded(true);

      setTimeout(()=>{
        setisadded(false)
      }, 3000);
    };

    const handleWishList = () => {
      const item = { ...props };
       dispatch(wishListCart(item));
      setIsWished(true);

      setTimeout(()=>{
        setIsWished(false)
      }, 3000);
    };

























  return (
    <div>
      <div className="product_card">
        
        <figure>
          <img src={img} alt="item-img" />
          {/* <img width={20} src={"/images/whishlist.png"}alt="item-img"/> */}
        </figure>
        <strong className="rating">{rating}</strong>
        <h4 className="titile">{title}</h4>
        <h3 className="price"> ₹ {price.toLocaleString()}</h3>
        <button
          type="button"
          className={`btn ${isadded ? "added" : ""}`}
          onClick={handleAddTOcart}
        >
          {isadded ? "added" :'add to Cart'}

        </button>

        <button
          type="button"
          className={`btn ${isWished ? "Wished" : ""}`}
          onClick={handleWishList}
        >
          {isadded ? "Wished" :'Add To WishList'}

        </button>


      </div>
    </div>
  );
}
export default Product