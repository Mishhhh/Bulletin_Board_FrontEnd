import * as React from 'react';
import Navigation from '../Component/NavBar';
import Posts from '../Component/Allpost';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { replacePost, setPost } from '../redux/actions/HomeAction';
import { IReduxState } from '../constants/Interfaces';
import AddPostButton from '../Component/Buttons/AddPost';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [postUpdate, setPostUpdate] = React.useState(0)
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1)
  const posts = useSelector((state: IReduxState) => state.Post)
  const session = useSelector((state: any) => state.Login.uid)
  React.useEffect(() => {
    getData()
  }, [postUpdate, page])

  let size = 4 * page
  
  async function getData() {

    const posts = await axios.get(`https://localhost:7000/api/Post?Limit=${4}&page=${page}`).then(res => res.data)
    const user = await axios.get("https://localhost:7000/api/User/Name").then(res => res.data)

    dispatch(replacePost(posts, user))
  }




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
          (session != 0) ? <AddPostButton /> : null

        }
        <button onClick={() => { setPage(page - 1);  }}>PreviousPage</button>
        <button onClick={() => { setPage(page + 1);  }}>NextPage</button>
      </>

    </div>
  );
}
