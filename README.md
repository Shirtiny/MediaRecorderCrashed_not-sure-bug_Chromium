# MediaRecorderCrashed_not-sure-bug_Chromium
1. Create a "canvas", get the "offscreenCanvas" by "transferControlToOffscreen".
2. Transfer the "offscreenCanvas" to any Worker.
3. Use "MediaRecorder" to record the origin "canvas", and stop record after any second.
4. In worker, call the "offscreenCanvas"'s "Canvas context API" after that record stopped. Then, the page crashed with "STATUS_ACCESS_VIOLATION" .

https://bugs.chromium.org/p/chromium/issues/detail?id=1298844
