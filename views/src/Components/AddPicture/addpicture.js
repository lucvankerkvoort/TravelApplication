import React, { useState, useContext } from "react";
import { storage } from "../../Firebase/firebase";
import { store } from "../../Services/store";
const AddPicture = ({ setImage }) => {
  const userData = useContext(store);
  const { dispatch } = userData;

  const [imageAsFile, setImageAsFile] = useState("");

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  console.log(setImage);
  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImage(true);
            dispatch({
              type: "images",
              payload: userData.state.images
                ? [...userData.state.images, fireBaseUrl]
                : [fireBaseUrl],
            });
          });
      }
    );
  };

  return (
    <div className="add-item">
      <form onSubmit={handleFireBaseUpload}>
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          onChange={handleImageAsFile}
        />
        <label for="file">Choose a Profile Picture</label>
        <button>Upload Picture</button>
      </form>
    </div>
  );
};

export default AddPicture;
