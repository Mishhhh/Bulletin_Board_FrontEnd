import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IAddPostModal, IComments } from '../constants/Interfaces';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { error, log } from 'console';

interface UpdateComment {

    renderComment: any,
    obj: IComments, show: boolean, onHide: () => void, setRender: React.Dispatch<any>
}

const UpdateComment: React.FC<UpdateComment> = ({ obj, onHide, renderComment, show, setRender }) => {
    const session = useSelector((state: any) => state.Login.uid)
    const PostID = useSelector((state: any) => state.SinglePost.pid)
    const [updatecomment, setUpdateComment] = React.useState(obj.commentDetails)

    function handleEdit(): void {
        let commentUpdate = [
            {
                "cid": obj.cid,
                "pid": PostID,
                "uid": session,
                "commentDetails": updatecomment,
                "timeStamp": new Date()
            }]
        axios.put('https://localhost:7000/api/Comment', commentUpdate)
            .then((response) => { console.log(response) }).catch((err) => {
                console.log(err);
            })
        console.log(obj.cid);
        let temp = renderComment + 1
        setRender(temp)
        onHide()

    }


    return (

        <Modal

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={onHide}
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Comment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea rows={5} value={updatecomment} onChange={(e) => { setUpdateComment(e.target.value) }} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={(e) => handleEdit()}>Update</Button>
            </Modal.Footer>
        </Modal>


    );
}
export default UpdateComment;