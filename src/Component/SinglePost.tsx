import * as React from 'react';
import { IComments, IPostsWithName, IReduxState } from '../constants/Interfaces';
import CustomizeButton from './Buttons/CustomizeButtons';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import UpdateComment from './UpdateComment';
import { IPosts } from '../constants/Interfaces';
import { setSinglePost } from '../redux/actions/SinglePostAction';



export default function SinglePost(post: IPostsWithName) {
  const session = useSelector((state: any) => state.Login.uid)
  const PostID = useSelector((state: any) => state.SinglePost.pid)
  const PostUser = useSelector((state: any) => state.SinglePost.uid)

  const [isAuth, setIsAuth] = React.useState(false)
  const [showComment, setShowComment] = React.useState(false)
  const [showUpdateComment, setShowUpdateComment] = React.useState(false)
  const [comment, setComment] = React.useState("")
  const [postComments, setPostComments] = React.useState<IComments[]>([])
  const [renderComment, setRenderComment] = React.useState(0)
  const [modalShow, setModalShow] = React.useState(false)
  const dispatch = useDispatch()
  React.useEffect(() => {

    (session != null) ? setIsAuth(true) : setIsAuth(false)

    fetchComment(PostID)
  }, [renderComment])
  React.useEffect(() => {
    (session != null) ? setIsAuth(true) : setIsAuth(false)
    getPost(PostID)
  }, [])

  const fetchComment = async (PostID: number) => {
    axios.get(`https://localhost:7000/commentByPostId?PID=${PostID}`).then((response) => {
      console.log(response)
      setPostComments(response.data)
      console.log(postComments)
    })
      .catch((err) => alert(err.response.data))

  }
  const getPost = async (PostID: number) => {
    const PostData: IPosts = await axios.get(`https://localhost:7000/PostDetails?PID=${PostID}`).then(res => res.data)
    dispatch(setSinglePost(PostData))
  }

  const handleLike = () => {

    (isAuth) ?
      axios.post(`https://localhost:7000/api/Post/Like?PID=${PostID}&UID=${session}`).then((response) => {
        console.log(response)
      })
        .catch((err) => alert(err.response.data)) : alert("Please log-in")
    console.log(PostID)
    setRenderComment(renderComment + 1)
  }
  const handleCommentShow = () => {
    (isAuth) ? setShowComment(true) : alert("Please log-in")
  }
  const handleDeleteComment = (cid: any) => {
    console.log(cid)
    console.log(PostID)
    console.log(session)
    axios.delete(`https://localhost:7000/api/Comment?CID=${cid}&PID=${PostID}&UID=${session}`).then((response) => {
      console.log(response)
      setRenderComment(renderComment + 1)
    })
      .catch((err) => {
        console.log(err)
      })
  }
  const handleComment = () => {
    let commentObject = [
      {
        "cid": 0,
        "pid": PostID,
        "uid": session,
        "commentDetails": comment,
        "timeStamp": new Date()
      }
    ]
    axios.post('https://localhost:7000/api/Comment', commentObject).then((response) => {
      alert("Comment added")
      setRenderComment(renderComment + 1)
      setShowComment(false)
    })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <div>
      <div><h1>
        {post.postTitle}
      </h1>
        <>
          {
            (session === PostUser) ? <CustomizeButton /> : null
          }

        </>
        <div>
          {post.postDetails}

        </div>

        <div>
          <h5>PostViews:{post.postViews}</h5>
          <p>{post.likes} liked this post</p>
          <button onClick={handleLike}>like</button>
          <button onClick={handleCommentShow}>Comment</button>
          {
            (showComment) ?
              <div>
                <textarea rows={5} onChange={(e) => setComment(e.target.value)} placeholder='Write comment' />
                <button onClick={handleComment}>Post</button>
              </div> : null
          }
          {
            postComments.map((x: IComments) =>
            (

              <>
                <div key={x.cid + renderComment + "Unique"} style={{ border: '1px solid gray', padding: '0.3em', margin: '1em 15em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}><p>{x.commentDetails}</p><span>{x.timeStamp}</span></div>
                  {
                    (session == x.uid) ? <div style={{ display: 'flex', flexDirection: 'row' }}><button onClick={() => {
                      setShowUpdateComment(true)
                      setModalShow(true)
                      console.log(showUpdateComment)
                      console.log(modalShow)

                    }}
                    >Edit</button>
                      <button onClick={() => handleDeleteComment(x.cid)}>Delete</button>
                      <UpdateComment setRender={setRenderComment} renderComment={renderComment} obj={x} show={modalShow} onHide={() => { setModalShow(false) }} />
                    </div> : null

                  }


                </div>

              </>
            )
            )
          }
          {

          }
        </div>
      </div>

    </div>
  );
}
