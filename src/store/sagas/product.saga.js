import { takeEvery, put } from 'redux-saga/effects'
import { loadProducts, saveProducts } from '../actions/product.action'
import axios from 'axios'

function* handleLoadProducts() {
  const { data } = yield axios.get('http://localhost:3005/goods')
  yield put(saveProducts(data))
}

export default function* productSaga() {
  yield takeEvery(loadProducts, handleLoadProducts)
}
