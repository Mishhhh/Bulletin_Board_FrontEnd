import * as React from 'react';
import Navigation from '../Component/NavBar';
import Posts from '../Component/Allpost';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../redux/actions/HomeAction';
import { IReduxState } from '../constants/Interfaces';
import AddPostButton from '../Component/Buttons/AddPost';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [postUpdate, setPostUpdate] = React.useState(0)
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1)
  React.useEffect(() => {
    getData()
  }, [postUpdate, page])

  let size = 4 * page
  async function getData() {

    const posts = await axios.get(`https://localhost:7000/api/Post?Limit=${size}`).then(res => res.data)
    const user = await axios.get("https://localhost:7000/api/User/Name").then(res => res.data)

    dispatch(setPost(posts, user))
  }


  const posts = useSelector((state: IReduxState) => state.Post)
  posts.slice(size - 4, size)
  console.log(posts)
  const session = useSelector((state: any) => state.Login.uid)

  return (
    <div>
      <Navigation />
      <div style={{}}>
        {
          posts.length > 0 &&
          posts.map(post => <Posts post={post} key={post.pid} />)
        }
      </div>
      <>
        {
          (session != null) ? <AddPostButton /> : null

        }
        <button onClick={() => { setPage(page + 1) }}>NextPage</button>
        <button onClick={() => { setPage(page - 1) }}>PreviousPage</button>
      </>

    </div>
  );
}
