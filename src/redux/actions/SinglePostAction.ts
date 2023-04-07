import { IPosts, IPostsWithName, ISetPostAction, ISetSinglePostAction, IUserName } from "../../constants/Interfaces";
import { ActionTypes } from "../../constants/actionTypes";
import { Interface } from "readline";
export const setSinglePost = (Post: IPosts): ISetSinglePostAction => {

    return {
        type: ActionTypes.SET_SINGLE_POST,
        payload: { post: Post }
    };

}