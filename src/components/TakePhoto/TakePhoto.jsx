import React, { useRef, useEffect, useState } from "react";
import { toTakePhoto, createPhotoRef } from "../..";
import "./takePhoto.sass";
function TakePhoto() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const closeTakingPhoto = () => {
    createPhotoRef("");
    toTakePhoto(false);
  };
  const savePhoto = () => {
    toTakePhoto(false);
  };
  const takePhoto = () => {
    console.log("Photo is Taking");
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
    createPhotoRef(photo.toDataURL());
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div>
      <div className="TakePhoto">
        <video ref={videoRef}></video>
        <button className="TakePhoto_flash" onClick={takePhoto} type="button">
          Take a Photo
        </button>
        <div className="result">
          <canvas ref={photoRef}></canvas>
          <button onClick={closeTakingPhoto}>Close</button>
          <button onClick={savePhoto}>Save Photo</button>
        </div>
      </div>
    </div>
  );
}
export default TakePhoto;
