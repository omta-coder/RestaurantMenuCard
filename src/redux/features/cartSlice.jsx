import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    carts:[]
}

//cart slice
const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            console.log(IteamIndex);
            if (IteamIndex >= 0){
                state.carts[IteamIndex].qnty +=1;
            }else{
              const temp = {...action.payload,qnty:1}
              state.carts = [...state.carts,temp];
            }

        },

        //remove perticular item
        removeToCart:(state,action)=>{
            const data = state.carts.filter((elem)=>elem.id !== action.payload);
            state.carts = data;
        },

        //remove single item
        removeSingleIteams:(state,action)=>{
            const IteamIndex_dec = state.carts.findIndex((item)=> item.id === action.payload.id)

            if(state.carts[IteamIndex_dec].qnty >=1){
                state.carts[IteamIndex_dec].qnty -= 1
            }
        },

          // clear cart
          emptycartIteam:(state,action)=>{
            state.carts = []
        }
    }
});


export const {addToCart,removeToCart,removeSingleIteams,emptycartIteam} =  cartSlice.actions;
export default cartSlice.reducer;