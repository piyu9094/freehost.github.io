import{createSlice}from'@reduxjs/toolkit';

//initial value            
const initialState ={
    iscartopen:false,
    cartitems:[]

};

const cartslice= createSlice({
    name:'Cart',
    initialState,
    reducers:{
        toggleCart(state,action){
            state.iscartopen=action.payload;
        },
       
         addItem(state, action){
            const newItemId=action.payload.id;

            const existringitem=state.cartitems.find(item =>item.id === newItemId);
            if(existringitem){
                existringitem.quantity++;
            }else{
                state.cartitems.push(action.payload);
            }
         },

         removeItem(state,action){
            state.cartitems = state.cartitems.filter(item=>item.id !== action.payload);
         },

         incrementItem(state,action){
            state.cartitems=state.cartitems.map(item=>{
            if (item.id === action.payload){
                item.quantity++;
            }
            return item;
            });
             },

         decrementItem(state,action){
            state.cartitems = state.cartitems.map(item => {
                 if (item.id === action.payload){
                    item.quantity--;
                 }
                 return item;
            }).filter(item=>item.quantity !== 0);
         }

        }
    })
export const{ addItem, toggleCart ,removeItem,incrementItem,decrementItem}=cartslice.actions
export default cartslice.reducer;
