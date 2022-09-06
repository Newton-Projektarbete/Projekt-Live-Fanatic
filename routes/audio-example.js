const fs = require("fs")
const path = require("path")
const root = path.dirname(__dirname)

module.exports = function(server, db){

    server.get("/data/audio-example", function (req, res) {
        // Ensure there is a range given for the audio
        const range = req.headers.range;
        if (!range) {
          res.status(400).send("Requires Range header");
        }
      
        const audioPath = root + "/audio/springtide.mp3";
        const audioSize = fs.statSync(root + "/audio/springtide.mp3").size;
      
        const CHUNK_SIZE = 10 ** 6; // 1MB
        const start = Number(range.replace(/\D/g, ""));
        const end = Math.min(start + CHUNK_SIZE, audioSize - 1);
      
        // Create headers
        const contentLength = end - start + 1;
        const headers = {
          "Content-Range": `bytes ${start}-${end}/${audioSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": contentLength,
          "Content-Type": "audio/mp3",
        };
      
        // HTTP Status 206 for Partial Content
        res.writeHead(206, headers);
      
        // create audio read stream for this particular chunk
        const audioStream = fs.createReadStream(audioPath, { start, end });
      
        // Stream the audio chunk to the client
        audioStream.pipe(res);
    })

}