import { ActionTypes } from "./actionTypes";

export interface IPosts {
    uid: number;
    pid: number;
    postTitle: string;

    postDetails: string;

    likes: number;
    postViews: number;
    category: string;
    ImageUrl:string

    timeStamp: Date;
    isApproved: number;
}
export interface IPostsWithName extends IPosts {
    username: string;
}
export interface IUserName {
    uid: number;
    name: string;
}
export interface IReduxState {
    uid: number | null;
    Post: IPostsWithName[];
    SinglePost: IPostsWithName;
}
export interface ISetPostAction {
    type: ActionTypes.SET_POST
    payload: {
        posts: IPostsWithName[]
    }
}
export interface IReplacePostAction {
    type: ActionTypes.REPLACE
    payload: {
        posts: IPostsWithName[]
    }
}

export interface ISetSinglePostAction {
    type: ActionTypes.SET_SINGLE_POST
    payload: {
        post: IPosts
    }
}
export interface ISetUserSessionAction {
    type: ActionTypes.SET_USER_SESSION | ActionTypes.LOGOUT
    payload: {
        userid: number
    }
}
export interface IRemoveUserAciton {
    type: ActionTypes.REMOVE

}
export interface IAddPostModal {
    show: boolean,
    onHide(): void
}
export interface IComments {

    cid: number,
    pid: number,
    uid: number,
    commentDetails: string,
    timeStamp: string

}
export interface IUser {
    phoneNo: string,
    isActive: number,
    email: string,
    password: string,
    uid: number,
    name: string
}

