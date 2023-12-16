import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type cartProps = {
    src: string;
    ProductName: string;
    ProductPrice: string;
    id:number;
    quantity?: number;
}

interface CartState {
  cartList: cartProps[];
  isLoading: boolean;
  error:string;
}

const getInitialCartState = (): CartState => {
    let cartArray: cartProps[] = []
  const cartArrayLS = localStorage.getItem("CartArray");
  if (cartArrayLS) {
    const storedCartArray = JSON.parse(cartArrayLS);
    cartArray=storedCartArray
  } else {
    console.log('Array not found in localStorage');
  }
  
  return {
    cartList: cartArray,
    isLoading: false,
    error:'',
  };
};

const initialState: CartState = getInitialCartState();

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      cartFetching(state){
        state.isLoading = true;
      },
      cartFetchingSuccess(state, action: PayloadAction<cartProps[]>){
        state.isLoading = false;
        state.error = '';
        state.cartList = action.payload;
        localStorage.setItem('CartArray', JSON.stringify(state.cartList));
      },
      cartFetchingError(state, action: PayloadAction<string>){
        state.isLoading = false;
        state.error = action.payload;
      }
    },
})

export const { cartFetching, cartFetchingSuccess, cartFetchingError } = cartSlice.actions;
export default cartSlice.reducer;