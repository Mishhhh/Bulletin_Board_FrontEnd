import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { IPosts, IPostsWithName } from '../constants/Interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSinglePost } from '../redux/actions/SinglePostAction';
import axios from 'axios';
import Navigation from './NavBar';




const PostByCategory: React.FC = () => {
  const { Category } = useParams();
  const navigate = useNavigate();
  const dispathc = useDispatch()
  const [PostByCategory, setPostByCategory] = React.useState([])
  React.useEffect(() => {
    getPostByCategory();
  }, [])
  const getPostByCategory = async () => {

    const Post = await axios.get(`https://localhost:7000/api/Post/Post_By_Category?Category=${Category}`).then((response) => response.data)
    setPostByCategory(Post)


  }
  function handleNav() {

    navigate('/singlepost')
  }
  return (
    <>
      <Navigation />
      {
        PostByCategory.map((post: any) => <div className='Post' style={{ padding: "10px", width: "100%" }}>
          <Card style={{ width: "40%", margin: "0em auto" }}>
            <Card.Header className='PostHeader' onClick={handleNav}>{post.username}/{post.category}</Card.Header>
            <Card.Body >
              {post.postTitle}
              <blockquote className="blockquote mb-0">
                <p>
                  {post.postDetails}

                </p>

              </blockquote>
            </Card.Body>
          </Card>
        </div>)

      }

    </>
  );
}
export default PostByCategory;