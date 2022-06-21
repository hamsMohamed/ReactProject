import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loader from './reducers/loader'

const store = createStore(loader,composeWithDevTools());


export default store;
