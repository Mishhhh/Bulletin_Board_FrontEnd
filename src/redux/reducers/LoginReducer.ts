import { IPosts, IPostsWithName, IRemoveUserAciton, ISetPostAction, ISetSinglePostAction, ISetUserSessionAction } from "../../constants/Interfaces";
import { ActionTypes } from "../../constants/actionTypes";

const initialState = {
    uid: null,
    user_name: ""
}
export function LoginReducer(state = initialState, action: ISetUserSessionAction | IRemoveUserAciton): any {
    switch (action.type) {
        case ActionTypes.SET_USER_SESSION: {
            console.log(action.payload)
            return {
                ...state,
                uid: action.payload.userid
            }
        }
        case ActionTypes.REMOVE:
            return null;
        case ActionTypes.LOGOUT: {
            return {
                ...state,
                uid: null
            }
        }
        default:
            return state;
    }
}