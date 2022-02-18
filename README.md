# MediaRecorderCrashed_not-sure-bug_Chromium
Crashed with STATUS_ACCESS_VIOLATION Crashes, when "offscreenCanvas" is transferred to "Worker" then call "Canvas context API" after  "MediaRecord.stop()".离屏渲染在mediaRecorder.stop之后因为控制权（？）导致崩溃， 一个chrome内核的bug? 
1.Create a "canvas", get the "offscreenCanvas" by "transferControlToOffscreen".
2.Transfer the "offscreenCanvas" to any Worker.
3.Use "MediaRecorder" to record the origin "canvas", and stop record after any second.
4.In worker, call the "offscreenCanvas"'s "Canvas context API" after that record stopped. Then, the page crashed with "STATUS_ACCESS_VIOLATION" .
