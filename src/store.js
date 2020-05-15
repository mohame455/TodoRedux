import {createStore,combineReducers} from "redux"
import SetItemReducer from "./reducers/SetItemReducer";
import AddItemReducer from "./reducers/AddItemReducer";
const Store =createStore(combineReducers({

        item:SetItemReducer,
        TodoList:AddItemReducer
        
        
    }))

export default Store;