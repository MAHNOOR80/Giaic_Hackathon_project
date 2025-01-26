import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  slug: {
    current: string;
  };
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
  description?: string;
}

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistslice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistslice.actions;
export default wishlistslice.reducer;
