import { handleAction as createReducer } from 'redux-actions'
import {
  addProductToLocalCart,
  saveCarts,
  deleteProductFromLocalCart,
  changeLocalProductNumber,
} from '../actions/cart.action'

const initialState = []

const handleAddProductToLocalCart = (state, action) => {
  // 添加的商品未在购物车 直接添加
  // 添加的商品已在购物车 将商品数量加一

  // 拷贝原有购物车数据
  const newState = JSON.parse(JSON.stringify(state))
  // 查找商品 如找到 返回商品 如未找到 返回undefined
  const product = newState.find((product) => product.id === action.payload.id)
  if (product) {
    // 商品已存在于购物车中
    product.count = product.count + 1
  } else {
    // 商品未在购物车中
    newState.push(action.payload)
  }
  return newState
}

const handleSaveCarts = (state, action) => action.payload

const handleDeleteProductFromLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.splice(action.payload, 1)
  return newState
}

const handleChangeLocalProductNumber = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find((product) => product.id === action.payload.id)
  product.count = action.payload.count
  return newState
}

export default createReducer(
  {
    [addProductToLocalCart]: handleAddProductToLocalCart,
    [saveCarts]: handleSaveCarts,
    [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
    [changeLocalProductNumber]: handleChangeLocalProductNumber,
  },
  initialState
)
