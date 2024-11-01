import { configureStore } from '@reduxjs/toolkit'
import toastreducer from './slice/toast'
import cartreducer from './slice/cart'
import modelreducer from './slice/modal'

export const store = configureStore({
  reducer: {
    toast: toastreducer,
    cart: cartreducer,
    modal: modelreducer

  },
})