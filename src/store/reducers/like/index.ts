import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type likeProps = {
    id: string;
}

interface LikeState {
  likeListId: likeProps[];
  isLoading: boolean;
  error:string;
}

const getInitialLikeState = (): LikeState => {
    let likeArray: likeProps[] = []
  const likeArrayLS = localStorage.getItem("LikeArray");
  if (likeArrayLS) {
    const storedLikeArray = JSON.parse(likeArrayLS);
    likeArray=storedLikeArray
  } else {
    localStorage.setItem('LikeArray', '[]');
    console.log('Array not found in localStorage');
  }
  
  return {
    likeListId: likeArray,
    isLoading: false,
    error:'',
  };
};

const initialState: LikeState = getInitialLikeState();

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
      likeFetching(state){
        state.isLoading = true;
      },
      likeFetchingSuccess(state, action: PayloadAction<likeProps[]>){
        state.isLoading = false;
        state.error = '';
        state.likeListId = action.payload;
        localStorage.setItem('LikeArray', JSON.stringify(state.likeListId));
      },
      likeFetchingError(state, action: PayloadAction<string>){
        state.isLoading = false;
        state.error = action.payload;
      }
    },
})

export const { likeFetching, likeFetchingSuccess, likeFetchingError } = likeSlice.actions;
export default likeSlice.reducer;