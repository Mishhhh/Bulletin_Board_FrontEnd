import { IPosts, IPostsWithName, ISetPostAction, IUserName } from "../../constants/Interfaces";
import { ActionTypes } from "../../constants/actionTypes";
import { Interface } from "readline";
export const setPost = (Posts: IPosts[], user: IUserName[]): ISetPostAction => {
    let newPost: IPostsWithName[] = [];
    Posts.forEach(
        post => {
            let abc: IUserName | undefined = user.find(item => item.uid == post.uid)
            let item: IPostsWithName = {
                ...post,
                username: abc?.name ?? ""
            }
            newPost.push(item)
        }
    )
    return {
        type: ActionTypes.SET_POST,
        payload: { posts: newPost }
    };

}

