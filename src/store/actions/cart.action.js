import { createAction } from 'redux-actions'

// 向服务器端发送请求 告诉服务器端我们要将哪一个商品添加到购物车中
export const addProductToCart = createAction('addProductToCart')

// 将商品添加到本地购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart')

// 向服务端发送请求 获取购物车列表数据
export const loadCarts = createAction('loadCarts')

// 将服务端返回的购物车列表数据同步到本地购物车中
export const saveCarts = createAction('savaCarts')

// 向服务器端发送请求 告诉服务器要删除那个商品
export const deleteProductFromCart = createAction('deleteProductFromCart')

// 删除本地购物车商品
export const deleteProductFromLocalCart = createAction(
  'deleteProductFromLocalCart'
)

// 向服务端发送请求 告诉服务端要将哪一个商品的数量更改成什么
export const changeServiceProductNumber = createAction('changeServiceProductNumber')

// 更新本地购物车商品数量
export const changeLocalProductNumber = createAction('changeLocalProductNumber')
