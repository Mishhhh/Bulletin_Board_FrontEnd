import { IPosts, IPostsWithName, ISetPostAction, ISetSinglePostAction } from "../../constants/Interfaces";
import { ActionTypes } from "../../constants/actionTypes";

const SinglePost = {
    uid: 0,
    pid: 0,
    postDetails: "",
    postTitle: "",
    likes: 0,
    postViews: 0,
    category: "",
    ImageUrl:"",
    timeStamp: new Date(),
    isApproved: 0,
    username: ""
}
export function singlePostReducer(state: IPosts = SinglePost, action: ISetSinglePostAction): IPosts {
    switch (action.type) {
        case ActionTypes.SET_SINGLE_POST:
            return action.payload.post;
        default:
            return state;
    }
}