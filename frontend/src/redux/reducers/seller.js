import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const sellerReducer = createReducer(initialState, {
  LoadSellerRequest: (state) => {
    state.isLoading = true;
  },
  LoadSellerSuccess: (state, action) => {
    state.isSeller = true;
    state.isLoading = false;
    state.seller = action.payload;
  },
  LoadSellerFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.isSeller = false;
  },

  // update shop information
  updateSellerInfoRequest: (state) => {
    state.loading = true;
  },
  updateSellerInfoSuccess: (state, action) => {
    state.loading = false;
    state.sellers = action.payload;
  },
  updateSellerInfoFailed: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // update shop area
  updateSellerAreaRequest: (state) => {
    state.loading = true;
  },
  updateSellerAreaSuccess: (state, action) => {
    state.loading = false;
    state.successMessage = action.payload.successMessage;
    state.sellers = action.payload.sellers;
  },
  updateSellerAreaFailed: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // delete shop area
  deleteSellerAreaRequest: (state) => {
    state.arealoading = true;
  },
  deleteSellerAreaSuccess: (state, action) => {
    state.arealoading = false;
    state.successMessage = action.payload.successMessage;
    state.sellers = action.payload.shop;
  },
  deleteSellerAreaFailed: (state, action) => {
    state.arealoading = false;
    state.error = action.payload;
  },

  // get all sellers ---admin
  getAllSellersRequest: (state) => {
    state.isLoading = true;
  },
  getAllSellersSuccess: (state, action) => {
    state.isLoading = false;
    state.sellers = action.payload;
  },
  getAllSellerFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
