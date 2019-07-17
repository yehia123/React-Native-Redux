import { createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
const initialState = { tech: "React" };


const store = createStore(reducers);