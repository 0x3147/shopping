import { handleActions as createReducer } from 'redux-actions'
import { saveProducts } from '../actions/product.action'

const initialState = []

const handeleSaveProducts = (state, action) => action.payload

export default createReducer(
  {
    [saveProducts]: handeleSaveProducts,
  },
  initialState
)
