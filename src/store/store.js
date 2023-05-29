import {configureStore} from'@reduxjs/toolkit';
import mm from'./slice/cartslice';
import wish from "./slice/wishlist"

const store= configureStore({
    reducer:{
        Cart:mm, 
        wish:wish,

    }
})
export default store




