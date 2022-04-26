import React, { useRef, useEffect, useState } from "react";
import { toTakePhoto, createPhotoRef } from "../..";

import "./takePhoto.sass";
function TakePhoto() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
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
    let tracks = videoRef.current.srcObject.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  };
  const savePhoto = () => {
    toTakePhoto(false);
    let tracks = videoRef.current.srcObject.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });

    // .ref(`/images`)
    // .putString(photoRef.current.toDataURL("image/jpeg"), "data_url");
  };
  const takePhoto = async () => {
    console.log("Photo is Taking");
    const width = 320;
    const height = 270;

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
    const blob = await (await fetch(photo.toDataURL("image/jpeg"))).blob();
    const file = new File([blob], "fileName.jpg", {
      type: "image/jpeg",
      lastModified: new Date(),
    });
    createPhotoRef(file);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div>
      <div className="TakePhoto">
        <video className="TakePhoto_camera" ref={videoRef}></video>
        <div className="TakePhoto_flash--wrapper">
          <button
            className="TakePhoto_flash"
            onClick={takePhoto}
            type="button"
          ></button>
        </div>
        <div className="TakePhoto_result">
          <div className="TakePhoto_result-canvas">
            <canvas ref={photoRef}></canvas>
          </div>
          <div className="TakePhoto_result--wrapper">
            <button
              className="TakePhoto_result-close"
              onClick={closeTakingPhoto}
            >
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button className="TakePhoto_result-ok" onClick={savePhoto}>
              <i class="fa fa-check fa-xl" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TakePhoto;
