const fs = require('fs')

module.exports = function(server, db){

    server.get('/data/video-stream/:id', (req, res)=>{
        let query = "SELECT * FROM videos WHERE id = @id"
        let result = db.prepare(query).all(req.params)
        result = result[0]

        const range = req.headers.range;
        
        if (!range) {
            res.status(400).send("Requires Range header");
        }

        const videoPath = __dirname + "/../video/" + result.url;
        const videoSize = fs.statSync(videoPath).size;
        
        const CHUNK_SIZE = 10 ** 6; // 1MB
        const start = Number(range.replace(/\D/g, ""));
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
        
        // Create headers
        const contentLength = end - start + 1;
        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
        };
        
        // HTTP Status 206 for Partial Content
        res.writeHead(206, headers);
        
        // create video read stream for this particular chunk
        const videoStream = fs.createReadStream(videoPath, { start, end });
        
        // Stream the video chunk to the client
        videoStream.pipe(res);
    })

}