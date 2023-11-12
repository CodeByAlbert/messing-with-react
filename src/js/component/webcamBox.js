import React, { useRef, useEffect } from "react";

function WebcamBox() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Error accessing webcam:", err));
    }
  }, []);

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const image = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = image;
      downloadLink.download = "webcam_image.png";
      downloadLink.click();
    }
  };

  return (
    <div
      id="webcamBox"
      className="webcam-box bg-dark border rounded justifycontent-center"
    >
      <video ref={videoRef} autoPlay width="640" height="480"></video>
      <canvas
        ref={canvasRef}
        width="auto"
        height="auto"
        style={{ display: "none" }}
      ></canvas>
      <button onClick={handleCapture}>Capture Photo</button>
    </div>
  );
}

export default WebcamBox;
