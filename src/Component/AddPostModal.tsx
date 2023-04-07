import { BlobOptions } from 'buffer';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { IPosts } from '../constants/Interfaces';
import { error } from 'console';
import { setPost } from '../redux/actions/HomeAction';
import { IAddPostModal } from '../constants/Interfaces';




export default function AddPostModal(obj: IAddPostModal) {
    const [postTitle, setPostTitle] = React.useState("")
    const [postCategory, setPostCategory] = React.useState("")
    const [postDescription, setPostDescription] = React.useState("")
    const [image,setImage] = React.useState("")
    const inputFileRef = React.createRef()
    const session = useSelector((state: any) => state.Login.uid)
    const dispatch = useDispatch()

    
    
    const handleOnChange = (event:any) =>{
        const newImage = event.target.files[0];
        if(newImage){
            setImage(newImage);
        }
        console.log(image)
    }
    const handleSubmitPost = async () => {
        console.log(image)
        const formdata = new FormData()
        formdata.append("file",image)
        formdata.append("timestamp",new Date().toDateString())
        formdata.append("api_key","896812281246646")
        formdata.append("signature","xUvtbyb7Q6ccSBJ-qXaHfnnDyJk")
        await axios.post("https://api.cloudinary.com/v1_1/dkzom0bax/image/upload",formdata).then((response)=>{
            console.log(response)
        })
        // let PostObj: IPosts[] = [{
        //     uid: session,
        //     pid: 0,
        //     category: postCategory,
        //     postTitle: postTitle,
        //     postDetails: postDescription,
        //     timeStamp: new Date(),
        //     isApproved: 0,
        //     ImageUrl:"",
        //     likes: 0,
        //     postViews: 0

        // }]
        // async function getData() {
        //     const posts = await axios.get("https://localhost:7000/api/Post").then(res => res.data)
        //     const user = await axios.get("https://localhost:7000/api/User/Name").then(res => res.data)
        //     dispatch(setPost(posts, user))
        // }
        // axios.post('https://localhost:7000/api/Post', PostObj)
        //     .then((response) => {
        //         console.log(response)
        //         obj.onHide()
        //         getData()
        //     }
        //     )
        //     .catch((error) => { console.log(error) })

    }
    return (
        <div>
            <Modal
                {...obj}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{ display: "flex", flexDirection: "column", padding: "1em" }}>
                        <input type="text" onChange={(e) => setPostTitle(e.target.value)} placeholder='Post Title' style={{ margin: "0.5em" }} />
                        <input type="text" onChange={(e) => setPostCategory(e.target.value)} placeholder='Post Category' style={{ margin: "0.5em" }} />
                        <input type= "file" name='postImage' onChange={(e)=>handleOnChange(e)}/>
                        <textarea rows={5} onChange={(e) => setPostDescription(e.target.value)} placeholder='Post Decription' style={{ margin: "0.5em" }} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={obj.onHide}>Close</Button>
                    <Button type='submit' onClick={handleSubmitPost}> Post</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}
