const fs = require('fs')

module.exports = function(server, db){

  server.get('/data/audio-stream/:id', (req, res)=>{
    let query = "SELECT * FROM audios WHERE id = @id"
    let result = db.prepare(query).all(req.params)
    result = result[0]

    const range = req.headers.range;

    if (!range) {
      res.status(400).send("Requires Range header");
    }

    const audioPath = __dirname + "/../audio/" + result.url;
    const audioSize = fs.statSync(audioPath).size;

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