// import React from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import {
//   toggleCart,
//   removeItem,
//   incrementItem,
//   decrementItem,
// } from "../store/slice/wishlist";


// const wish = () => {
//   const { iscartopen,wishList  } = useSelector((state) => state.Cart);

//   const dispatch = useDispatch();

//   const handleclosecart=(close)=>{
//     dispatch(toggleCart(close));
//   };
//   const handleremovecart = (itemId)=>{
//     dispatch(removeItem(itemId));
//   };
//   const handleIncrement = (itemId) => {
//     dispatch(incrementItem(itemId));
//   };
//   const handleDecrement = (itemId) => {
//     dispatch(decrementItem(itemId));
//   };
//   const cartquantity = wishList.length;

//   const cartTotal = cartitems.map(item=>item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

//   return (
//     <div>
//       {
//       iscartopen && (
//         <div id="cart">
//           <div className=" cart_content">
//             <div className="cart_head">
//               <h2>cart<small>{cartquantity}</small></h2>
//                <div
//                 title="close"
//                 className="close_btn"
//                 onClick={() => handleclosecart(false)}
//               >
//                 <span>&times;</span>
//               </div>
//             </div>
//             <div className="cart_body">
//               {cartquantity === 0 ? (
//                 <h2>Cart is quantity</h2>
//               ) : (
//                 cartitems.map((item) => {
//                   const { id, img, title, price, quantity } = item;
//                   const itemTotal = price * item.quantity;
//                   return (
//                     <div className=" cart_items" key={id}>
//                       <figure className="cart_items_img">
//                         <img src={img}alt="product-img" />
//                       </figure>
//                       <div className="cart_items_info">
//                         <h4>{title}</h4>
//                         <h3 className="price">₹{itemTotal.toLocaleString()}</h3>
//                       </div>
//                       <div className=" cart_items_quantity">
//                         <span onClick={() => handleDecrement(id)}>&#8722;</span>
//                         <b>{quantity}</b>
//                         <span onClick={() => handleIncrement(id)}>&#43;</span>
//                       </div>
//                       <div
//                         title="Remove Item"
//                         className="cart_item_delete"
//                         onClick={()=>handleremovecart(id)}
//                       >
//                         <span>&times;</span>
//                       </div>
//                     </div>
//                   );
//                 })
//               )}
//             </div>

//             <div className="cart_foot">
//               <h3>
//                 <small> Total:</small>
//                 <b>₹ {cartTotal.toLocaleString()}</b>
//               </h3>
//               <button
//                 type="button"
//                 className="checkout_btn"
//                 disabled={cartquantity === 0}
//               >
//                 checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
  
      
//     </div>
//   );
// }
    
// export default Cart
