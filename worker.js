/*
 * @Author: Shirtiny
 * @Date: 2022-02-18 13:12:56
 * @LastEditTime: 2022-02-18 14:08:43
 * @Description:
 */
self.onmessage = (e) => {
  const { offscreenCanvas } = e.data;
  console.log("received offscreenCanvas", offscreenCanvas);

  const ctx = offscreenCanvas.getContext("2d");
  ctx.strokeText("wait 2 seconds", 50, 100);
  
  setTimeout(() => {
    console.log(ctx);
    ctx.fillStyle = "red";
    ctx.fillText("Crashed：STATUS_ACCESS_VIOLATION", 50, 100);
  }, 2000);
};
