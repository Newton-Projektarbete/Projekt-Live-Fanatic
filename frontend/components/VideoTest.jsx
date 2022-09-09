function VideoTest(){

    return <>
  <section>
  <h2>Video example</h2>
    <p>This HTML Video example is for proof that the backend streaming works, for production The JavaScript Video object should be used.</p>

    <video id="videoPlayer" width="50%" controls muted="muted" autoplay>
        <source src="/video/Chris-Do.mp4" type="video/mp4" />
    </video>
  </section>
</>
}

export default VideoTest