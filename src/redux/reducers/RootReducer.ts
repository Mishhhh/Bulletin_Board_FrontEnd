import { combineReducers } from "redux";
import { postReducer } from "./HomeReducer";
import { singlePostReducer } from "./SinglePostReducer";
import { setSession } from "../actions/LoginAction";
import { LoginReducer } from "./LoginReducer";

const RootReducer = combineReducers({
    Post: postReducer,
    SinglePost: singlePostReducer,
    Login: LoginReducer
});

export default RootReducer;