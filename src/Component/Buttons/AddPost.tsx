import * as React from 'react';
import AddPostModal from '../AddPostModal';
// 3

// function handleClick(): void {
//     axios.post('https://localhost:7000/api/Post',{

//     })
//   }



export default function AddPostButton() {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <div>
      <div>
        <button style={{ borderRadius: "50%" }} onClick={() => setModalShow(true)}>+</button>
        <AddPostModal show={modalShow} onHide={
          () => {
            setModalShow(false)

          }
        } />
      </div>
    </div>
  );
}
