import * as React from 'react';
import SinglePost from '../Component/SinglePost';
import { IPostsWithName, IReduxState } from '../constants/Interfaces';
import { useSelector } from "react-redux";
import Navigation from '../Component/NavBar';

export default function SinglePostPage() {
  const post = useSelector((state: IReduxState) => state.SinglePost)
  return (
    <div>
      <Navigation />
      <SinglePost {...post} />

    </div>
  );
}
