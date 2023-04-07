import { createStore, compose } from "redux";
import RootReducer from "./reducers/RootReducer";
import { IReduxState } from "../constants/Interfaces";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState: IReduxState = {
    Post: [],
    uid: null,
    SinglePost: {
        uid: 0,
        pid: 0,
        postDetails: "",
        postTitle: "",
        likes: 0,
        postViews: 0,
        ImageUrl:"",
        category: "",
        timeStamp: new Date(),
        isApproved: 0,
        username: ""
    }


}

const store = createStore(
    RootReducer,
    initialState,
    composeWithDevTools()
);

export default store;