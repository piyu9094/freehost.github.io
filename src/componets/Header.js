import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { toggleCart } from '../store/slice/cartslice';

// import { wishList } from '../store/slice/wishlist';

export default function Header() {
  const { cartitems } = useSelector((state) => state.Cart);
  const { wishList } = useSelector((state) => state.wish);
  
  const dispatch = useDispatch();
  const handleopencart = (open) => {
    dispatch(toggleCart(open));

  }
  const log = () => {

    localStorage.removeItem("Sinup")
    window.location.reload()

  }
  // const handleclick = () => {

  // }
  const cartquantity = cartitems.length;
  const wishquantity = wishList.length;
  return (
    <>
      {/* <button  onClick={handleclick}>Logout</button> */}
      <div>
        <header id="header">
          <div className='container'>
            <div className='navbar'>


              <img width={50} src='../images/shopcart.png' alt='shopcartimg' />
              <div className='nav_menu'>
                
                <div
                  title="cart"
                  className='car_icon'
                  onClick={() => handleopencart(true)}
                >

                  <img width={50} src='/images/whishlist.png' alt="bag-icon" />
                  <span className='badge'>{cartquantity} </span>

                  <img width={35} src='/images/bag2.png' alt="bag-icon" />
                  <span className='badges'>{wishquantity}</span>
                  <button onClick={log}><img width={30} src='../images/logout.png' alt='logout'/></button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>

  )
}

