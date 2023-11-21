
export default function Button() {
    let mediaRecorder;

    async function recordScreen() {
        return await navigator.mediaDevices.getDisplayMedia({
            audio: true,
            video: { mediaSource: "screen" }
        });
    }

    function createRecorder(stream, mimeType) {
        // the stream data is stored in this array
        let recordedChunks = [];
        console.log("3")
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = function (e) {
            if (e.data.size > 0) {
                recordedChunks.push(e.data);
            }
        };
        console.log("2")
        mediaRecorder.onstop = function () {
            saveFile(recordedChunks);
            recordedChunks = [];
        };
        mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
        console.log("1")
        return mediaRecorder;
    }

    function saveFile(recordedChunks) {

        const blob = new Blob(recordedChunks, {
            type: 'video/webm'
        });
        let filename = window.prompt('Enter file name'),
            downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `${filename}.webm`;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        URL.revokeObjectURL(blob); // clear from memory
        document.body.removeChild(downloadLink);
    }
    async function onStart() {
        console.log(mediaRecorder)
        let stream = await recordScreen();
        let mimeType = 'video/webm';
        console.log("AAAA")
        mediaRecorder = createRecorder(stream, mimeType);
        console.log("mediaRecorder")
        let node = document.createElement("p");
        node.textContent = "Started recording";
        document.body.appendChild(node);
        console.log(mediaRecorder)
        //setInterval(onStop,10000);
    }

    async function onStop() {
        console.log("test")
        mediaRecorder.stop();
        let node = document.createElement("p");
        node.textContent = "Stopped recording";
        document.body.appendChild(node);
    }

    function openCam() {
        let All_mediaDevices = navigator.mediaDevices
        if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
            console.log("getUserMedia() not supported.");
            return;
        }
        All_mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
            .then(function (vidStream) {
                var video = document.getElementById('videoCam');
                if ("srcObject" in video) {
                    video.srcObject = vidStream;
                } else {
                    video.src = window.URL.createObjectURL(vidStream);
                }
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            })
            .catch(function (e) {
                console.log(e.name + ": " + e.message);
            });
    }

    function closeCam() {
        let All_mediaDevices = navigator.mediaDevices
        if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
            console.log("getUserMedia() not supported.");
            return;
        }
        All_mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
            .then(function (vidStream) {
                var video = document.getElementById('videoCam');
                if ("srcObject" in video) {
                    video.srcObject = undefined;
                } else {
                    video.src = "";
                }
                video.onloadedmetadata = function (e) {
                    video.pause();
                };
                vidStream.getTracks()[0].stop();
            })
            .catch(function (e) {
                console.log(e.name + ": " + e.message);
            });
    }


    return (
        <>
            <div>
                <button id="start" onClick={() => onStart()}> start
                </button>
                <button id="stop" onClick={() => onStop()}> stop
                </button>
                <button onClick={() => openCam()}>OpenCam</button>
                <button onClick={() => closeCam()}>CloseCam</button>
            </div>
            <div>
                <video id="videoCam"></video>
            </div>
        </>
    )
}
