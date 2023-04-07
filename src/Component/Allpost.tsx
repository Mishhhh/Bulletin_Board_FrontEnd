import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { IPosts, IPostsWithName } from '../constants/Interfaces';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSinglePost } from '../redux/actions/SinglePostAction';



const Posts: React.FC<{ post: IPostsWithName }> = ({ post }) => {
  const navigate = useNavigate();

  const dispathc = useDispatch()
  function handleNav() {
    dispathc(setSinglePost(post))
    navigate('/singlepost')
  }
  return (
    <div className='Post' style={{ padding: "10px", width: "100%" }}>
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
    </div>
  );
}
export default Posts;