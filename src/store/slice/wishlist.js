import{createSlice}from"@reduxjs/toolkit";

const initialState ={
  iswhislistopen: false,
  wishList: []
};
const wishlist=createSlice({
  name: "wish",
  initialState,
  reducers:{    
    toggleCart(state, action) {
      state.iswhislistopen = action.payload;
    },  

    wishListCart(state, action) {
      const newItemId = action.payload.id;

      const existingItems = state.wishList.find(
        (item) => item.id === newItemId
      );
      if (existingItems) {
        existingItems.quantity++;
      }else{
        state.wishList.push(action.payload);
      }
    },
  },
});
export const { wishListCart, toggleCart } = wishlist.actions;
export default wishlist.reducer;
