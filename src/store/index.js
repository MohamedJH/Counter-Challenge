import {createStore} from 'redux'
import {rootReducer} from '../Redux/reducer'

const reactDevsTools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store=createStore(rootReducer,reactDevsTools)

export default store