import { IPosts, IPostsWithName, IReplacePostAction, ISetPostAction, IUserName } from "../../constants/Interfaces";
import { ActionTypes } from "../../constants/actionTypes";
import { Interface } from "readline";
export const setPost = (Posts: IPosts[], user: IUserName[]): ISetPostAction => {
    
    return {
        type: ActionTypes.SET_POST,
        payload: { posts: MapUserNameToPost(Posts,user) }
    };

}


export default function MapUserNameToPost (Posts:IPosts[],user :IUserName[]):IPostsWithName[] {
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
        return newPost
    }
 


export const replacePost = (Posts: IPosts[], user: IUserName[]): IReplacePostAction=> {
    
   
    return {
        type: ActionTypes.REPLACE,
        payload: { posts: MapUserNameToPost(Posts,user) }
    };

}



