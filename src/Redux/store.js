import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './Reducer/Reducer'

export const history = createBrowserHistory();

const configStore = () => {
    return createStore(rootReducer(history), +window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
 ) 
}
export const store = configStore();
