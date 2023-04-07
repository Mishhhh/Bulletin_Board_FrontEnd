import { IPosts, IReplacePostAction, ISetPostAction } from "../../constants/Interfaces";
import { ActionTypes } from "../../constants/actionTypes";


export function postReducer(state: IPosts[] = [],
    action: ISetPostAction|IReplacePostAction
): IPosts[] {
    switch (action.type) {
        case ActionTypes.SET_POST:
            return [...state,...action.payload.posts];
        case ActionTypes.REPLACE:
            return[...action.payload.posts]
        default:
            return state;
    }
}