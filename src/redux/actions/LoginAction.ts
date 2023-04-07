import { IPosts, IPostsWithName, ISetPostAction, ISetSinglePostAction, ISetUserSessionAction, IUserName } from "../../constants/Interfaces";
import { ActionTypes } from "../../constants/actionTypes";
import { Interface } from "readline";
export const setSession = (uid: number): ISetUserSessionAction => {
    let thisUser: number = uid;
    console.log(uid)
    return {
        type: ActionTypes.SET_USER_SESSION,
        payload: { userid: uid }

    };

}
export const Logout = (): ISetUserSessionAction => {
    return {
        type: ActionTypes.LOGOUT,
        payload: { userid: 0 }

    };

}
// export const setSession()