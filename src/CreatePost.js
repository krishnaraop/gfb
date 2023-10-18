import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Navigation from './OtherSmallComponents/Navigation'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { auth, db } from './firebase'

// import { useSnackbar } from "notistack";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage"
import { storage } from './firebase';
// import MoonLoader from "react-spinners/MoonLoader";
// import { v4 as uuidv4 } from 'uuid';

const CreatePost = () => {

  
  const isAuth = (localStorage.getItem("isAuth"))
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [imageUpload, setImageUpload] = useState('')
  const [featureImage, setFeatureImage] = useState()
  const [uploading, setUploading] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [showUploadBtn, setShowUploadBtn] = useState(false)

  const scenesCollectionRef = collection(db, "Post")


  // Store the information to the firebase database



  // const handleUploadToStorage = async () => {

  //   const imageRef = ref(storage, `images/${`feature-image` + (Math.floor(Math.random() * (10000000)))}`)
  //   const uploadTask = uploadBytesResumable(imageRef, imageUpload)
  //   try {
  //     await uploadBytes(imageRef, imageUpload)
  //     uploadTask.on("state_changed", (snapshot) => {
  //       // const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

  //     }, (err) => console.log(err),
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref)
  //           .then(url => {
  //             setFeatureImage(url)
  //             console.log(url)
  //           })
  //       }
  //     )

  //   }
  //   catch (error) {
  //     console.log(error)
  //   }

  //   setUploading(false)
  //   setShowUploadBtn(false)
  // }
  const handlePublish = async () => {
   
    try {
      await addDoc(scenesCollectionRef, {
        link: link+'-'+1,
        title,
        author: auth.currentUser.displayName,
        profilePic: auth.currentUser.photoURL,
        content,
        createdAt: serverTimestamp(),
        featureImage
      });
      setPublishing(false)    
    }
    catch (error) {
      console.log(error)
    }

  }
 
  return (
    <div>
     <p>test</p>
      {/* <div className="createPost mt-[10rem] container px-5 flex align-center justify-center gap-5">
        <div className="inner container px-5 flex flex-col align-center justify-center gap-6">
          <h2 className='font-semibold text-lg text-[2rem]'>What's in your mind?</h2>
          <div className="flex align-center justify-between gap-[5rem]">
            <input placeholder='Title of the post' className='font-semibold text-lg text-3xl w-[55rem] p-2' onChange={(e) => setTitle(e.target.value)} />
            <button className='bg-indigo-500 w-1/4 text-white' onClick={handlePublish}>{!publishing ? "Publish Blog" : "Publishing..."}</button>
          </div>
          {
            publishing ? <MoonLoader /> : null
          }
        </div>
        <div className="sidebar w-full flex flex-col align-start gap-6">
          <h3 className='font-semibold text-2xl'>Upload feature image</h3>
          <label htmlFor="inputTag" className='upload-btn'>
            Select Image
            <input id="inputTag" type="file"
              onChange={(event) => {
                setShowUploadBtn(true);
                setImageUpload(event.target.files[0])
              }} />
          </label>

          {
            showUploadBtn ? <button className="text-white w-[5rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={uploadImage} >
              Upload
            </button> : null
          }

          {uploading ? <MoonLoader /> : <img src={featureImage} alt="" />}
        </div>
      </div> */}
    </div>
  )
}

export default CreatePost