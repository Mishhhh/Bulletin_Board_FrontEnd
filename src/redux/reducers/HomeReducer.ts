import { IPosts, ISetPostAction } from "../../constants/Interfaces";
import { ActionTypes } from "../../constants/actionTypes";


export function postReducer(state: IPosts[] = [],
    action: ISetPostAction
): IPosts[] {
    switch (action.type) {
        case ActionTypes.SET_POST:
            return [...action.payload.posts];
        default:
            return state;
    }
}