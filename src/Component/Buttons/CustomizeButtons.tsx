import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setPost } from '../../redux/actions/HomeAction';
import { useNavigate } from 'react-router-dom';


export default function CustomizeButton(): JSX.Element {
  const PostUser = useSelector((state: any) => state.SinglePost.pid)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  async function getData() {
    const posts = await axios.get("https://localhost:7000/api/Post").then(res => res.data)
    const user = await axios.get("https://localhost:7000/api/User/Name").then(res => res.data)
    dispatch(setPost(posts, user))
  }

  function handleDelete(): void {
    axios.delete(`https://localhost:7000/api/Post?PID=${PostUser}`).then((response) => {
      console.log(response)
      alert("Post Deleted!!")
      getData();
      navigate('/')
    })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <button >Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
