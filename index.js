/*
 * @Author: Shirtiny
 * @Date: 2022-02-18 10:42:47
 * @LastEditTime: 2022-02-18 14:09:48
 * @Description:
 */
const canvasOrigin = document.querySelector("canvas");
setupCanvas(canvasOrigin);

const mediaRecorder = record(canvasOrigin);

console.log("mediaRecorder.start");

setTimeout(() => {
  mediaRecorder.stop();
  console.log("mediaRecorder.stop");
}, 2000);

function record(element) {
  const options = { mimeType: "video/webm; codecs=vp9" };
  try {
    const mediaStream = element.captureStream(25);

    const mediaRecorder = new MediaRecorder(mediaStream, options);

    mediaRecorder.addEventListener("dataavailable", function done(e) {
      console.log("record stop");
    });
    mediaRecorder.start();
    return mediaRecorder;
  } catch (e) {
    console.error(e);
  }
  return [];
}

function setupCanvas(canvas) {
  const offscreenCanvas = canvas.transferControlToOffscreen();
  const myWorker = new Worker("./worker.js");
  myWorker.postMessage(
    {
      offscreenCanvas,
    },
    [offscreenCanvas]
  );
}
